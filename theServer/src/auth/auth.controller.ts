/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Request,
  Post,
  UseGuards,
  HttpCode,
  Res,
  Session,
} from '@nestjs/common';
import { AuthService } from './auth.services';
import { AuthDto } from './dto/authDto';
import { LocalAuthGuard } from './localAuthGuard';
import { Response } from 'express';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }
  @UseGuards(LocalAuthGuard)
  @Post('signin')
  @HttpCode(200)
  login(
    @Request() req,
    @Session() session,
    @Res({ passthrough: true }) res: Response,
  ): any {
    const sessionId = req.session.id;
    res.cookie('mycook', 'this');
    return {
      req: req.session,
      session: sessionId,
      msg: 'User logged in',
    };
  }
}
