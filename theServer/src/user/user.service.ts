import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getTestResults() {
    return { msg: 'test results' };
  }
}
