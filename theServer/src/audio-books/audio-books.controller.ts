import {
  Controller,
  Get,
  Param,
  Res,
  Post,
  UseInterceptors,
  UploadedFile,
  ParseFilePipeBuilder,
  Body,
  HttpStatus,
} from '@nestjs/common';
import { AudioBooksService } from './audio-books.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { AudioBooksDto } from './dto/AudioBooksDto';

@Controller('audio-books')
export class AudioBooksController {
  constructor(private readonly audioBooksService: AudioBooksService) {}
  @Get('')
  getBooks() {
    return this.audioBooksService.getBooks();
  }

  @Get('fourbooks')
  getLastFour() {
    return this.audioBooksService.getLastFourBooks();
  }

  @Get(':id')
  getBooksById(@Param('id') id: string) {
    return this.audioBooksService.getBooksById(id);
  }

  @Get('file/:id')
  async getBookFile(@Res() response: Response, @Param('id') id: string) {
    const file = await this.audioBooksService.getBookFile(id);

    response.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="file.pdf"',
    });

    response.send(file);
  }

  @Get('/image/:id')
  getBookImage(@Param('id') id: string) {
    return this.audioBooksService.getBookImage(id);
  }

  // books management

  @Post('/management/addbook')
  @UseInterceptors(FileInterceptor('file'))
  uploadFilePdf(
    @UploadedFile(
      new ParseFilePipeBuilder().build({
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      }),
    )
    file: Express.Multer.File,
    @Body() dto: AudioBooksDto,
  ) {
    return this.audioBooksService.addBook(file, dto);
  }

  // @Roles('ADMIN') // Only admin role allowed
  // @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('/management/bookimage')
  @UseInterceptors(FileInterceptor('file'))
  uploadBookImage(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: 'jpeg|jpg|png' })
        .addMaxSizeValidator({ maxSize: 5000000 })
        .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
    )
    file: Express.Multer.File,
    @Body() body: any,
  ) {
    return this.audioBooksService.addImage(file, body);
  }

  // @Roles('ADMIN') // Only admin role allowed
  // @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('/management/bookimageremove/:id')
  removeBookImage(@Param('id') id: string) {
    return this.audioBooksService.removeBookImage(id);
  }

  // @Roles('ADMIN') // Only admin role allowed
  // @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('/management/bookremove/:id')
  removeBook(@Param('id') id: string) {
    return this.audioBooksService.removeBook(id);
  }
}
