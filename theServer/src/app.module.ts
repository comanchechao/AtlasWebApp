/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ExamModule } from './exam/exam.module';

@Module({
  imports: [AuthModule, UserModule, ExamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
