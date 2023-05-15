import { Injectable } from '@nestjs/common';
import { UserEntity } from '../user.entity';
import { CustomUserDto } from '../dto/custom-user.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class CustomUserConverter {
  convertToEntity(dto: CustomUserDto): UserEntity {
    return plainToClass(UserEntity, dto);
  }
}
