import { Injectable } from '@nestjs/common';
import { ClassConstructor, plainToInstance } from 'class-transformer';

@Injectable()
export abstract class BaseConverter<D, E> {
  abstract dtoToEntity(dto: D): E;
  abstract entityToDto(entity: E): D;

  dtoToEntityList(dtoList: D[]): E[] {
    return dtoList.map((dto) => this.dtoToEntity(dto));
  }

  entityToDtoList(entityList: E[]): D[] {
    return entityList.map((entity) => this.entityToDto(entity));
  }

  protected transformDto(dto: D, entityClass: ClassConstructor<E>): E {
    return plainToInstance(entityClass, dto);
  }

  protected transformEntity(entity: E, dtoClass: ClassConstructor<D>): D {
    return plainToInstance(dtoClass, entity);
  }
}
