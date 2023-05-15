# test-dto-mapper-nestjs

> 이 프로젝트는 NestJS의 DTO 매핑을 테스트하기 위한 용도로 만들어졌습니다. (개인적으로 편한 방법)

## Custom

- Entity가 있다고 가정한 상태에서 DTO를 Entity로 변환하는 과정에 대한 테스트를 진행합니다. 
- TypeORM에 대한 설정은 누락해두고, 가장 필요한 부분에 대해서만 구현하여 테스트를 진행합니다.

## AutoMapper

- AutoMapper 라이브러리를 이용한 방법도 존재합니다.
- 별도로 구현은 하지 않았습니다. 

```shell
npm install @automapper/classes @automapper/core @automapper/nestjs @automapper/types
```

## Reference 

- https://medium.com/@exfabrica/nestjs-dto-with-automapper-c4e89009f30b