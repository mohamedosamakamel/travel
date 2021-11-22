import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import * as jwt from 'jsonwebtoken';
import { UsersService } from 'src/users/users.service';
import { FilterUserDto } from 'src/users/dto/filter-user.dto';
import TokenPayload from '../tokenPayload.interface';
@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly userService: UsersService,
  ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    let token = null;
    const isPublic = this.reflector.get(IS_PUBLIC_KEY, context.getHandler());
    const request = context.switchToHttp().getRequest();
    request.header('authorization') &&
      (token = request.header('authorization').split(' ')[1]);
    if (isPublic) {
      if (!request.header('authorization')) return true;
    } else {
      if (!request.header('authorization')) return false;
    }
    return checkJWT(token, request, this.userService);
  }
}

const checkJWT = async (token, request, userService: UsersService) => {
  return jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      if (err.name) {
        if (err.name === 'JsonWebTokenError') {
          throw new HttpException(
            'Invalid access token.',
            HttpStatus.UNAUTHORIZED,
          );
        } else if (err.name === 'TokenExpiredError') {
          throw new HttpException(
            'Expired access token, please login again.',
            HttpStatus.UNAUTHORIZED,
          );
        }
      }
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    if (decoded.userId === undefined) {
      throw new HttpException('Invalid access token.', HttpStatus.UNAUTHORIZED);
    }

    const user = await userService.findOne({
      _id: decoded.userId,
    } as FilterUserDto);
    if (!user) return false;

    if (
      user &&
      (request.path.split('/')[3] === 'change-profile-unauthorized' ||
        request.path.split('/')[3] === 'merge-accounts')
    ) {
      request.me = user;
      return true;
    }

    if (user && user.enabled === false) {
      throw new HttpException(
        'Your account is disabled',
        HttpStatus.UNAUTHORIZED,
      );
    }

    request.me = user;
    return true;
  });
};
