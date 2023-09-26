import { Controller, Get, Param } from '@nestjs/common';
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
  constructor(private readonly videoService: VideosService) {}

  @Get(':id')
  getVideoById(@Param('id') id: string) {
    return this.videoService.getVideoById(id);
  }
}