import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { UserEntity } from '../user.entity';

export class CustomUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  static toEntity(dto: CustomUserDto): UserEntity {
    const entity = new UserEntity();

    entity.name = dto.name;
    entity.email = dto.email;
    entity.password = dto.password;
    entity.phone = dto.phone;

    return entity;
  }
}
