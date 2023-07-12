/* eslint-disable prettier/prettier */
import { Body, Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.services';
import { AuthDto } from './dto/authDto';
import { LocalAuthGuard } from './localAuthGuard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }
  @UseGuards(LocalAuthGuard)
  @Post('signin')
  login(@Request() req): any {
    return { User: req.user, msg: 'User logged in' };
  }
}
