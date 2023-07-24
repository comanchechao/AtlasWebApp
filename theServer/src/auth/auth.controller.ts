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

  @Post('test')
  loggingSomrhing(@Res({ passthrough: true }) res: Response) {
    res.cookie('testone', 'just set it there bitch', {
      sameSite: 'lax',
      domain: 'http://localhost:3000',
      path: '/',
      secure: false,
      httpOnly: false,
      maxAge: 60000,
    });
    return { msg: 'this should be all over now' };
  }

  // login method
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
    res.cookie('sess', sessionId);
    return {
      req: req.session,
      session: sessionId,
      msg: 'User logged in',
    };
  }
}
