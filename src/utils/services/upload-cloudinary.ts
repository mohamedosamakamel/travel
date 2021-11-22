import { Injectable } from '@nestjs/common';
import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import * as cloudinaryStorage from 'multer-storage-cloudinary';
import * as cloudinary from 'cloudinary';

(cloudinary as any).config({
  cloud_name: 'dqfrk92mp',
  api_key: '253596391863857',
  api_secret: 'zUSdqm663H7lfMKqdirIGZxu318',
});
@Injectable()
export class UploadCloudinary implements MulterOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createMulterOptions(): MulterModuleOptions {
    return {
      storage: cloudinaryStorage({
        cloudinary: cloudinary,
        params: {
          resource_type: 'auto',
        },
      }),
    };
  }
}
