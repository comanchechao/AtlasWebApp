import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AudioBooksDto } from './dto/AudioBooksDto';

@Injectable()
export class AudioBooksService {
  constructor(private readonly prismaService: PrismaService) {}

  async getBooks() {
    // const audioBooks = await this.prismaService.audioBooks.findMany({
    //   orderBy: {
    //     id: 'desc',
    //   },
    //   select: {
    //     id: true,
    //     title: true,
    //     description: true,
    //     AudioBooksImages: true,
    //   },
    // });
    // return { audioBooks: audioBooks };
  }

  async getLastFourBooks() {
    // const books = await this.prismaService.books.findMany({
    //   take: 4,
    //   select: {
    //     id: true,
    //     title: true,
    //     authur: true,
    //     image: true,
    //     description: true,
    //   },
    //   orderBy: {
    //     id: 'desc',
    //   },
    // });
    // return { books: books };
  }

  async getBooksById(id: string) {
    // const book = await this.prismaService.books.findUnique({
    //   where: {
    //     id: Number(id),
    //   },
    //   select: {
    //     id: true,
    //     title: true,
    //     description: true,
    //     image: true,
    //   },
    // });
    // return { book: book };
  }

  async getBookImage(id: string) {
    // const image = await this.prismaService.audioBooksImages.findUnique({
    //   where: {
    //     id: Number(id),
    //   },
    // });
    // if (!image) {
    //   return new ForbiddenException('image not found');
    // }
    // const imageDataURL = `data:image/jpeg;base64,${image.data}`;
    // return { image: imageDataURL };
  }

  // books management section

  async addImage(file: any, body: any) {
    // const image = await this.prismaService.audioBooksImages.create({
    //   data: {
    //     data: file.buffer.toString('base64'),
    //     filename: file.originalname,
    //     audioBook_id: Number(body.bookId),
    //   },
    // });
    // return { msg: 'عکس اضافه شد' };
  }

  async getBookFile(id: string) {
    // const file = await this.prismaService.books.findUnique({
    //   where: {
    //     id: Number(id),
    //   },
    //   select: {
    //     id: true,
    //     file: true,
    //   },
    // });
    // const pdfBuffer = Buffer.from(file.file, 'base64');
    // return pdfBuffer;
  }

  async addBook(file: any, dto: AudioBooksDto) {
    // const audioBook = await this.prismaService.audioBooks.create({
    //   data: {
    //     title: dto.title,
    //     authur: dto.author,
    //     file: file.buffer.toString('base64'),
    //     description: dto.description,
    //   },
    // });
    // return { audioBook: audioBook };
  }

  async removeBookImage(id: string) {
    // const image = await this.prismaService.audioBooksImages.delete({
    //   where: {
    //     id: Number(id),
    //   },
    // });
    // return { msg: 'عکس حذف گردید' };
  }

  async removeBook(id: string) {
    // const book = await this.prismaService.audioBooks.delete({
    //   where: {
    //     id: Number(id),
    //   },
    // });
    // return { msg: 'کتاب حذف گردید ' };
  }
}
