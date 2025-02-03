import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateItvDto } from './dto/create-itv.dto';
import { SearchItvDto } from './dto/search-itv.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehiculo } from './entities/itv.entity';
import { Repository } from 'typeorm';
import { SearchByOwnerDto } from './dto/search-by-owner.dto';
import { Persona } from './entities/persona.entity';

@Injectable()
export class ItvService {
  constructor(
    @InjectRepository(Vehiculo)
    private readonly itvRepository: Repository<Vehiculo>,

    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {}

  async create(createItvDto: CreateItvDto): Promise<Vehiculo> {
    const { personas, ...vehiculoData } = createItvDto;

    try {
      const vehiculo = this.itvRepository.create(vehiculoData);

      if (personas) {
        const linkedPersonas = await Promise.all(
          personas.map(async (personaDto) => {
            const existingPersona = await this.personaRepository.findOne({
              where: { nro_documento: personaDto.nro_documento },
            });

            if (existingPersona) {
              return existingPersona;
            } else {
              const newPersona = this.personaRepository.create(personaDto);
              return this.personaRepository.save(newPersona);
            }
          }),
        );
        vehiculo.personas = linkedPersonas;
      }

      return await this.itvRepository.save(vehiculo);
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async searchItv(searchItvDto: SearchItvDto): Promise<Vehiculo[]> {
    const { placa } = searchItvDto;
    const query = await this.itvRepository.createQueryBuilder('vehiculo');
    query.andWhere('vehiculo.datosTecnicosPlaca LIKE :placa', {
      placa: `%${placa}%`,
    });

    const vehiculos = await query.getMany();

    if (vehiculos.length > 0) return vehiculos;
    else
      throw new NotFoundException(
        `No se encontraron vehiculos con placa similar a ${placa}`,
      );
  }

  async searchItvOne(searchItvDto: SearchItvDto) {
    const { placa } = searchItvDto;
    const vechiculo = await this.itvRepository.findOne({
      where: { datos_tecnicos: { placa } },
    });

    if (vechiculo) return vechiculo;
    else
      throw new NotFoundException(
        `No se encontraron vehiculos con placa similar a ${placa}`,
      );
  }

  async searchByOwner(searchByOwnerDto: SearchByOwnerDto): Promise<Vehiculo[]> {
    const { nro_documento } = searchByOwnerDto;
    const persona = await this.personaRepository.findOne({
      where: { nro_documento },
      relations: ['vehiculos'],
    });

    if (!persona) {
      /*
      throw new NotFoundException(
        `Persona with nro_documento ${nro_documento} not found`,
      );
      */
     return [];
    }

    return persona.vehiculos;
  }

  async searchPersonaVehicles(searchItvDto: SearchItvDto): Promise<Persona[]> {
    const { placa } = searchItvDto;
    const vehiculo = await this.itvRepository.findOne({
      where: {
        datos_tecnicos: {
          placa,
        },
      },
      relations: ['personas'],
    });

    if (!vehiculo) {
      throw new NotFoundException(`Vehicle with placa ${placa} not found`);
    }

    return vehiculo.personas;
  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    console.log(error);

    throw new InternalServerErrorException('Please check server logs');
  }
}
