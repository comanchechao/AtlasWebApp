import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ImageGalleryDto } from './dto/ImageGalleryDto';

@Injectable()
export class ImageGalleryService {
  constructor(private readonly prismaService: PrismaService) {}

  async addGallery(dto: ImageGalleryDto) {
    console.log(dto);
    const gallery = await this.prismaService.imageGallery.create({
      data: {
        title: dto.title,
      },
    });
    return { msg: 'گالری اضافه شد', gallery: gallery };
  }

  async addImage(file: any, body: any) {
    console.log(body);
    const image = await this.prismaService.galleryImages.create({
      data: {
        file: file.buffer.toString('base64'),
        gallery_id: Number(body.galleryId),
      },
    });

    return { msg: 'عکس اضافه شد' };
  }
}
