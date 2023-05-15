import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int',
    unsigned: true,
    comment: 'PK',
  })
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 255,
    default: '',
    nullable: false,
    comment: '이름',
  })
  name: string;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 255,
    default: '',
    nullable: false,
    comment: '이메일',
  })
  email: string;

  @Column({
    name: 'password',
    type: 'varchar',
    length: 255,
    default: '',
    nullable: false,
    comment: '비밀번호',
  })
  password: string;

  @Column({
    name: 'phone',
    type: 'varchar',
    length: 255,
    default: '',
    nullable: false,
    comment: '전화번호',
  })
  phone: string;

  @Column({
    name: 'created_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
    comment: '등록일',
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: false,
    comment: '수정일',
  })
  updatedAt: Date;
}
