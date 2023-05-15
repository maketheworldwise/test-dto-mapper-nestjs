import { Injectable } from '@nestjs/common';
import { CustomUserDto } from './dto/custom-user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class CustomService {
  async problem1(name: string, email: string, password: string, phone: string) {
    // await this.repository.save(name, email, password, phone)
    // await this.repository.save(new UserEntity(name, email, password, phone))
    return { name, email, password, phone };
  }

  async problem2(dto: CustomUserDto) {
    // await this.repository.save(name, email, password, phone)
    // await this.repository.save(new UserEntity(name, email, password, phone))
    return { ...dto };
  }

  async solution1(entity: UserEntity) {
    // await this.repository.save(entity)
    return entity;
  }

  async solution2(entity: UserEntity) {
    // await this.repository.save(entity)
    return entity;
  }

  async solution3(entity: UserEntity) {
    // await this.repository.save(entity)
    return entity;
  }
}
