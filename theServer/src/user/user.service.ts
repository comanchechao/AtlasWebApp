import { Body, Injectable, NotAcceptableException, Req } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  getTestResults(req) {
    console.log(req);
  }
}
