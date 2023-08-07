import { Body, Injectable, NotAcceptableException, Req } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async getTestResults(username: string) {
    const user = await this.prismaService.user.findUnique({
      where: { username: username },
    });
    return { TorrenceTestResult: user.TorrenceTestResult };
  }
}
