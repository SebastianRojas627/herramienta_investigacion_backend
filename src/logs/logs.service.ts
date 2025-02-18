import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Log } from './entities/log.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LogsService {
  constructor(
    @InjectRepository(Log)
    private readonly logsRepository: Repository<Log>,
  ) {}

  async create(createLogDto: CreateLogDto) {
    try {
      const log = this.logsRepository.create(createLogDto);

      await this.logsRepository.save(log);
      return {
        ...log,
      };
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async findAll() {
    return await this.logsRepository.find();
  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    console.log(error);

    throw new InternalServerErrorException('Please check server logs');
  }
}
