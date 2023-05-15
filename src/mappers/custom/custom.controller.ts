import { Body, Controller, Get } from '@nestjs/common';
import { CustomService } from './custom.service';
import { CustomUserDto } from './dto/custom-user.dto';
import { CustomUserConverter } from './converter/custom-user.converter';
import { UserConverter } from './converter-generic/user.converter';
import {
  mapDtoToEntity1,
  mapDtoToEntity2,
  mapEntityToDto1,
  mapEntityToDto2,
} from './util/util';
import { UserEntity } from './user.entity';

@Controller('custom')
export class CustomController {
  constructor(
    private readonly service: CustomService,
    private readonly converter: CustomUserConverter,
    private readonly userConverter: UserConverter,
  ) {}

  @Get('problem1')
  async problem1(@Body() dto: CustomUserDto) {
    const { name, email, password, phone } = dto;
    // DTO 속성이 증가할 수록 인자 수가 늘어나는 문제!
    return await this.service.problem1(name, email, password, phone);
  }

  @Get('problem2')
  async problem2(@Body() dto: CustomUserDto) {
    // DTO를 서비스 계층에 전달할 경우 서비스 계층이 DTO에 의존되는 문제!
    return await this.service.problem2(dto);
  }

  @Get('solution1')
  async solution1(@Body() dto: CustomUserDto) {
    // problem1, problem2 문제는 해결했으나, 각 DTO마다 Entity로 변환하는 로직을 매번 추가해야하는 문제!
    return await this.service.solution1(CustomUserDto.toEntity(dto));
  }

  @Get('solution2')
  async solution2(@Body() dto: CustomUserDto) {
    // problem1, problem2 문제는 해결했으나, 여전히 각 DTO마다 Entity로 변환하는 일관성 없는 컨버터를 매번 추가해야하는 문제!
    const entity = this.converter.convertToEntity(dto);
    return await this.service.solution2(entity);
  }

  @Get('solution3')
  async solution3(@Body() dto: CustomUserDto) {
    // 추상 클래스를 상속받아 일관된 형식의 컨버터를 가지도록 구성!
    return await this.service.solution3(this.userConverter.dtoToEntity(dto));
  }

  @Get('solution4')
  async solution4(@Body() dto: CustomUserDto) {
    // 제네릭 함수를 이용한 Converter 함수로 구성!
    const entity = mapDtoToEntity1(dto, UserEntity);
    console.log('mapDtoToEntity1:', entity);

    const transformDto = mapEntityToDto1(entity, CustomUserDto);
    console.log('mapEntityToDto1:', transformDto);

    return { entity, transformDto };
  }

  @Get('solution5')
  async solution5(@Body() dto: CustomUserDto) {
    const entity = mapDtoToEntity2(dto, UserEntity);
    console.log('mapDtoToEntity2:', entity);

    const transformDto = mapEntityToDto2(entity, CustomUserDto);
    console.log('mapEntityToDto2:', transformDto);

    return { entity, transformDto };
  }
}
