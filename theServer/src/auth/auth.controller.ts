/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Request,
  Post,
  UseGuards,
  Response,
  Session,
} from '@nestjs/common';
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
  login(@Request() req, @Response() res, @Session() session): any {
    return {
      User: req.user,
      res: res,
      session: session,
      msg: 'User logged in',
    };
  }
}
