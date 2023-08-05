/* eslint-disable prettier/prettier */
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('role', context.getHandler());
    if (!roles) {
      return false;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    console.log(user);

    return roles.includes(user.role);
  }
}
