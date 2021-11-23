import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-token';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { FilterUserDto } from 'src/users/dto/filter-user.dto';
import CreateUserDto from 'src/users/dto/create-user.dto';
import RequestWithUser from '../interfaces/requestWithIUser.interface';

@Injectable()
export class GoogleOauthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly usersService: UsersService) {
    super({
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      passReqToCallback: true,
    });
  }

  async validate(
    req: RequestWithUser,
    _accessToken,
    _refreshToken,
    profile,
    done,
  ) {
    const { id, displayName, emails, _json } = profile;
    let user = await this.usersService.findOne({
      googleId: id,
    } as FilterUserDto);
    if (!user) {
      user = await this.usersService.createUser({
        username: displayName,
        email: emails[0].value,
        photo: _json.picture,
        googleId: id,
        role: 'Student',
      } as CreateUserDto);
    }
    req.me = user;
    done(null, req.me);
  }
}
