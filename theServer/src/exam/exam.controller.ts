import { Controller, Get } from '@nestjs/common';

@Controller('exam')
export class ExamController {
  @Get('highschool')
  getExam() {
    return 'this is what you should see';
  }
}
