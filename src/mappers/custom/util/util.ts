import { plainToInstance } from 'class-transformer';

export function mapDtoToEntity1<T, U>(dto: T, entityClass: new () => U): U {
  // Object.assign(target, source); 복사
  const entity = new entityClass();
  Object.assign(entity, dto);
  return entity;
}

export function mapEntityToDto1<T, U>(entity: T, dtoClass: new () => U): U {
  // Object.assign(target, source); 복사
  const dto = new dtoClass();
  Object.assign(dto, entity);
  return dto;
}

export function mapDtoToEntity2<T, U>(dto: T, entityClass: new () => U): U {
  return plainToInstance(entityClass, dto);
}

export function mapEntityToDto2<T, U>(entity: T, dtoClass: new () => U): U {
  return plainToInstance(dtoClass, entity);
}
