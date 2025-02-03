import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateSegipDto } from './dto/create-segip.dto';
import { Segip } from './entities/segip.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchSegipDto } from './dto/search-segip.dto';

@Injectable()
export class SegipService {
  constructor(
    @InjectRepository(Segip)
    private readonly segipRepository: Repository<Segip>,
  ) {}

  async searchSegip(searchDto: SearchSegipDto): Promise<Segip[]> {
    const { ced, com, nom, pat, mat } = searchDto;

    const query = this.segipRepository.createQueryBuilder('segip');

    if (ced && ced.trim() !== '') {
      query.andWhere('segip.NumeroDocumento LIKE :ced', { ced: `%${ced}%` });
    }
    if (com && com.trim() !== '') {
      query.andWhere('segip.Complemento LIKE :com', { com: `%${com}%` });
    }
    if (nom && nom.trim() !== '') {
      query.andWhere('segip.Nombres LIKE :nom', { nom: `%${nom}%` });
    }
    if (pat && pat.trim() !== '') {
      query.andWhere('segip.PrimerApellido LIKE :pat', { pat: `%${pat}%` });
    }
    if (mat && mat.trim() !== '') {
      query.andWhere('segip.SegundoApellido LIKE :mat', { mat: `%${mat}%` });
    }

    const personas = await query.getMany();

    if (personas.length > 0) return personas;
    else throw new NotFoundException('No se encontraron resultados');
  }

  async searchSegipbyName(searchDto: SearchSegipDto) {
    const { ced, com, nom, pat, mat } = searchDto;

    const query = this.segipRepository.createQueryBuilder('segip');

    if (ced && ced.trim() !== '') {
      query.andWhere('segip.NumeroDocumento LIKE :ced', { ced: `%${ced}%` });
    }
    if (com && com.trim() !== '') {
      query.andWhere('segip.Complemento LIKE :com', { com: `%${com}%` });
    }
    if (nom && nom.trim() !== '') {
      query.andWhere('segip.Nombres LIKE :nom', { nom: `%${nom}%` });
    }
    if (pat && pat.trim() !== '') {
      query.andWhere('segip.PrimerApellido LIKE :pat', { pat: `%${pat}%` });
    }
    if (mat && mat.trim() !== '') {
      query.andWhere('segip.SegundoApellido LIKE :mat', { mat: `%${mat}%` });
    }

    const persona = await query.getOne();
    if (persona)
      return {
        PrimerApellido: persona?.PrimerApellido,
        SegundoApellido: persona?.SegundoApellido,
        Nombres: persona?.Nombres,
        NumeroDocumento: persona?.NumeroDocumento,
        Domicilio: persona?.Domicilio,
      };
    else {
      return {
        PrimerApellido: "pruebas",
        SegundoApellido: "pruebas",
        Nombres: "pruebas",
        NumeroDocumento: "pruebas",
        Domicilio: "pruebas"
      };
    }
  }

  async searchSegipOne(searchSegipDto: SearchSegipDto) {
    const { ced } = searchSegipDto;
    const persona = await this.segipRepository.findOneBy({
      NumeroDocumento: ced,
    });

    if (persona) return persona;
    else
      throw new NotFoundException(
        'No se encontraron resultados de esta persona',
      );
  }

  async create(createSegipDto: CreateSegipDto) {
    try {
      const segip = this.segipRepository.create(createSegipDto);

      return await this.segipRepository.save(segip);
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    console.log(error);

    throw new InternalServerErrorException('Please check server logs');
  }
}
