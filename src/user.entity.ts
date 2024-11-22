import { ApiProperty } from "@nestjs/swagger";
import { Gender, User } from "@prisma/client";



export class UserEntity implements User {
    @ApiProperty({example:'1', description: 'Уникальный  идентификатор пользователя'})
    id: number;
  
    @ApiProperty({ example: 'Pablo', description: 'Имя пользователя' })
    name: string;
  
    @ApiProperty({ example:'Raccio', description: 'Фамилия пользователя'})
    last_name: string;
  
    @ApiProperty({ example: 45, description: 'Возраст' })
    age: number;
  
    @ApiProperty({ example: 'Male', description: 'Пол' })
    gender: Gender;
  
    @ApiProperty({ example: false, description: 'Наличие проблем' })
    problem: boolean;
  
   
  }