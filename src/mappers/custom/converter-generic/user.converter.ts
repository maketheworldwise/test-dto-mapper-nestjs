import { BaseConverter } from './abstract.converter';
import { UserEntity } from '../user.entity';
import { Injectable } from '@nestjs/common';
import { CustomUserDto } from '../dto/custom-user.dto';

@Injectable()
export class UserConverter extends BaseConverter<CustomUserDto, UserEntity> {
  dtoToEntity(dto: CustomUserDto): UserEntity {
    return this.transformDto(dto, UserEntity);
  }

  entityToDto(entity: UserEntity): CustomUserDto {
    return this.transformEntity(entity, CustomUserDto);
  }
}
