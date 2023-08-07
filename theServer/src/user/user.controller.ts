import { Controller, Get, Res, Session, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/guards/authenticated.guard';
import { UserService } from './user.service';
import { InfoGuard } from './guards/info.guard';
import { Response } from 'supertest';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthenticatedGuard)
  @Get('me')
  getMe() {
    return { msg: 'see me ' };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/results')
  getTestResults(@Res() req: Request) {
    return { msg: req };
  }

  @UseGuards(AuthenticatedGuard, InfoGuard)
  @Get('/myinfo')
  getInfo(@Session() session: Record<string, any>): any {
    return this.userService.getTestResults(session.passport.user.userName);
  }
}
