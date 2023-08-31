import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/decorators/role.decorator';
import { Role } from 'src/auth/decorators/role.enum';
import { LocalAuthGuard } from 'src/auth/localAuthGuard';
import { ManagementService } from './management.service';
import { ArticleDto } from './dto/ArticleDto';
import { ScheduleDto } from './dto/ScheduleDto';
import { AuthenticatedGuard } from 'src/auth/guards/authenticated.guard';
import { RolesGuard } from 'src/auth/guards/roleBase.guard';

@Controller('management')
export class ManagementController {
  constructor(private readonly managemenetService: ManagementService) {}

  @Get('getusers')
  @Roles('ADMIN')
  @UseGuards(LocalAuthGuard)
  getAllUsers() {
    return { msg: 'list of users' };
  }

  @Get('getAllTestResults')
  @Roles('ADMIN')
  @UseGuards(LocalAuthGuard)
  getTestResults() {
    return { msg: 'this is all the results' };
  }

  @Post('/addarticle')
  addArticle(@Body() dto: ArticleDto) {
    return this.managemenetService.addArticle(dto);
  }

  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Roles('ADMIN')
  @Post('/addschedule')
  addSchedule(@Body() dto: ScheduleDto) {
    return this.managemenetService.addSchedule(dto);
  }
}
