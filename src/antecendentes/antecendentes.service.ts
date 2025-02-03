import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAntecendenteDto } from './dto/create-antecendente.dto';
import { SearchAntecedentesDto } from './dto/search-antecedentes.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Antecedentes } from './entities/antecendente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AntecendentesService {
  constructor(
    @InjectRepository(Antecedentes)
    private readonly antecedentesRepository: Repository<Antecedentes>,
  ) {}

  async create(createAntecendenteDto: CreateAntecendenteDto) {
    try {
      const antecedentes = this.antecedentesRepository.create(
        createAntecendenteDto,
      );

      return await this.antecedentesRepository.save(antecedentes);
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async searchAntecedentes(searchAntecedentesDto: SearchAntecedentesDto) {
    const { NumeroDocumento } = searchAntecedentesDto;
    const antecedentes = await this.antecedentesRepository.findOne({
      where: { NumeroDocumento },
      select: { Transito: true, Felcc: true, Felcn: true },
    });

    if (antecedentes) return antecedentes;
    else return {
      Felcc: 'No Registra',
      Felcn: 'No Registra',
      Transito: 'No Registra'
    }
    /*
      throw new NotFoundException(
        `No se encontraron registros de antecedentes para la persona ${NumeroDocumento}`,
      );
      */
  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    console.log(error);

    throw new InternalServerErrorException('Please check server logs');
  }
}
