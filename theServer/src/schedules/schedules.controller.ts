import { Controller, Get } from '@nestjs/common';
import { SchedulesService } from './schedules.service';

@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Get('/getschedules')
  getSchedules() {
    return this.schedulesService.getSchedules();
  }
}
