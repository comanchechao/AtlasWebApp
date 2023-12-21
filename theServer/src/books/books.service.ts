import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BooksDto } from './dto/BooksDto';

@Injectable()
export class BooksService {
  constructor(private readonly prismaService: PrismaService) {}

  async getBooks() {
    // const books = await this.prismaService.books.findMany({
    //   orderBy: {
    //     id: 'desc',
    //   },
    //   skip: 1,
    //   select: {
    //     id: true,
    //     title: true,
    //     description: true,
    //     image: true,
    //   },
    // });
    // return { books: books };
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

  async addImage(file: any, body: any) {
    // console.log(body);
    // const image = await this.prismaService.booksImages.create({
    //   data: {
    //     data: file.buffer.toString('base64'),
    //     filename: file.originalname,
    //     book_id: Number(body.bookId),
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
    // return { file: file.file };
  }

  async addBook(file: any, dto: BooksDto) {
    // console.log(dto);
    // const book = await this.prismaService.books.create({
    //   data: {
    //     title: dto.title,
    //     authur: dto.author,
    //     file: file.buffer.toString('base64'),
    //     description: dto.description,
    //   },
    // });
    // return { book: book };
  }
}
