import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/guards/authenticated.guard';
import { UserService } from './user.service';
import { InfoGuard } from './guards/info.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthenticatedGuard)
  @Get('me')
  getMe() {
    return { msg: 'see me ' };
  }

  @Get('/results')
  getTestResults() {
    return this.userService.getTestResults();
  }

  @UseGuards(AuthenticatedGuard, InfoGuard)
  @Get('/myinfo')
  getInfo() {
    return { msg: 'success' };
  }
}
