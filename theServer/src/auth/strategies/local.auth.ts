/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.services';
import { AuthDto } from '../dto/authDto';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }
  async validate(dto: AuthDto): Promise<any> {
    const userName = dto.username;
    const user = await this.authService.validateUser(userName, dto.password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
