import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogsService } from './logs.service';
import { CreateLogDto } from './dto/create-log.dto';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces';

@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  /*
  @Post()
  create(@Body() createLogDto: CreateLogDto) {
    return this.logsService.create(createLogDto);
  }
    */

  @Get()
  @Auth( ValidRoles.admin )
  findAll() {
    return this.logsService.findAll();
  }

}
