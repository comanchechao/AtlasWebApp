import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { BooksDto } from './dto/BooksDto';

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

  // books management

  @Post('/addbook')
  @UseInterceptors(FileInterceptor('file'))
  uploadFilePdf(
    @UploadedFile(
      new ParseFilePipeBuilder().build({
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      }),
    )
    file: Express.Multer.File,
    @Body() dto: BooksDto,
  ) {
    return this.booksServices.addBook(file, dto);
  }
}
