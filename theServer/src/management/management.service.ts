import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ArticleDto } from './dto/ArticleDto';
import { ScheduleDto } from './dto/ScheduleDto';

@Injectable()
export class ManagementService {
  constructor(private readonly prismaService: PrismaService) {}

  async addArticle(dto: ArticleDto) {
    const Article = await this.prismaService.articles.create({
      data: {
        title: dto.title,
        body: dto.body,
        authur: dto.authur,
      },
    });
    return { msg: 'article added to database', article: Article };
  }

  async addSchedule(dto: ScheduleDto) {
    const schedule = await this.prismaService.schedule.create({
      data: {
        title: dto.title,
        teacher: dto.teacher,
        level: dto.level,
        days: dto.days,
        time: dto.time,
      },
    });
    return { msg: 'برنامه اضافه شد', schedule: schedule };
  }
}
