import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserEntity } from './user.entity';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

 @ApiOperation({summary:'проставит флаг "problem" у пользователей в false, выведет сколько пользователей имело true в этом флаге'})
 @ApiResponse({status:200, type:UserEntity})
  @Get('quantity')
  getUsers() {
    return this.appService.updateUserProblem();
  }
}




