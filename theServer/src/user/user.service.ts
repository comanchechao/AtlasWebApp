import { Injectable, ForbiddenException } from '@nestjs/common';
import { AuthDto } from 'src/auth/dto/authDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUser(userName: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        username: userName,
      },
    });
    if (!user) {
      throw new ForbiddenException('incorrect credentials');
    }
    return user;
  }
}
