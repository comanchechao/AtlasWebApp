import { Body, Injectable, NotAcceptableException, Req } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { examDto } from './dto/exam.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async getTestResults(username: string) {
    const user = await this.prismaService.user.findUnique({
      where: { username: username },
    });
    return { TorrenceTestResult: user.TorrenceTestResult };
  }

  async submitTorrence(dto: examDto, username: string) {
    const user = await this.prismaService.user.findUnique({
      where: { username: username },
    });
    if (!user) {
      throw new NotAcceptableException('user not found');
    }

    const result = await this.prismaService.user.update({
      where: { username: username },
      data: { TorrenceTestResult: Number(dto.torrenceResults) },
    });
    return { msg: 'results submited', results: result.TorrenceTestResult };
  }
}
