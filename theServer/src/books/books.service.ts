import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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
}
