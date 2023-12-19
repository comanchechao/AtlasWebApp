import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksServices: BooksService) {}
  @Get('')
  getBooks() {
    return this.booksServices.getBooks();
  }

  @Get('fourbooks')
  getLastFour() {
    return this.booksServices.getLastFourBooks();
  }

  @Get(':id')
  getBooksById(@Param('id') id: string) {
    return this.booksServices.getBooksById(id);
  }

  // @Get('image/:id')
  // getBooksImages(@Param('id') id: string) {
  //   return this.booksServices.getBooksImages(id);
  // }
}
