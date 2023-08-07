import { Body, Injectable, NotAcceptableException, Req } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async getTestResults(username: string) {
    console.log('this shloud be user name without any fuss', username);
    const user = await this.prismaService.user.findUnique({
      where: { username: username },
    });
    console.log(user.email);
    return { TorrenceTestResult: user.TorrenceTestResult };
  }
}
