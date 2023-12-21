import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { BooksDto } from './dto/BooksDto';
import { Roles } from 'src/auth/decorators/role.decorator';
import { AuthenticatedGuard } from 'src/auth/guards/authenticated.guard';
import { RolesGuard } from 'src/auth/guards/roleBase.guard';

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

  @Get('/file/:id')
  getBookFile(@Param('id') id: string) {
    return this.booksServices.getBookFile(id);
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

  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('bookimage')
  @UseInterceptors(FileInterceptor('file'))
  uploadArticleFile(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: 'jpeg|jpg|png' })
        .addMaxSizeValidator({ maxSize: 5000000 })
        .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
    )
    file: Express.Multer.File,
    @Body() body: any,
  ) {
    return this.booksServices.addImage(file, body);
  }
}
