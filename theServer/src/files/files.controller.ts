import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseFilePipeBuilder,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

@Controller('files')
export class FilesController {
  constructor(private readonly fileService: FilesService) {}

  @Get('')
  getBooks() {
    return this.fileService.getBooks();
  }
  @Get(':id')
  getBooksById(@Param('id') id: string) {
    return this.fileService.getBooksById(id);
  }
  @Get('file/:id')
  async getBookFile(@Res() response: Response, @Param('id') id: string) {
    const file = await this.fileService.getBookFile(id);

    response.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="file.pdf"',
    });

    response.send(file);
  }

  @Get('/image/:id')
  getBookImage(@Param('id') id: string) {
    return this.fileService.getBookImage(id);
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
    @Body() dto: BooksDto,
  ) {
    return this.fileService.addBook(file, dto);
  }

  // @Roles('ADMIN') // Only admin role allowed
  // @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('/management/bookremove/:id')
  removeBook(@Param('id') id: string) {
    return this.fileService.removeBook(id);
  }
}
