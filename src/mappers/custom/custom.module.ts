import { Module } from '@nestjs/common';
import { CustomController } from './custom.controller';
import { CustomService } from './custom.service';
import { CustomUserConverter } from './converter/custom-user.converter';
import { UserConverter } from './converter-generic/user.converter';

@Module({
  controllers: [CustomController],
  providers: [CustomService, CustomUserConverter, UserConverter],
})
export class CustomModule {}
