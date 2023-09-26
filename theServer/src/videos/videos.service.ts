import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VideosService {
  constructor(private readonly prismaService: PrismaService) {}

  async getVideoById(id: string) {
    const video = await this.prismaService.videos.findUnique({
      where: {
        id: 3,
      },
    });
    return { video: video, file: video.file };
  }
}
