import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {

  constructor(
    private prisma:PrismaService){}

  async updateUserProblem() {
    try {
     const userCount = await this.prisma.user.updateMany({
        where: { problem: true },
        data: { problem: false },
      });
      return userCount
    } catch(e) {
      onerror(e)
    }
  }
}



//count() {
  //return this.prisma.user.count({
   // where:{
    //  problem:true
   // }
 // });
//}