import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { initialData } from './data/seed-data';
import { User } from '../auth/entities/user.entity';
import { Vehiculo } from 'src/itv/entities/itv.entity';
import { Segip } from 'src/segip/entities/segip.entity';
import { Antecedentes } from 'src/antecendentes/entities/antecendente.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Antecedentes)
    private readonly antecedentesRepository: Repository<Antecedentes>,

    @InjectRepository(Segip)
    private readonly segipRepository: Repository<Segip>,

    @InjectRepository(Vehiculo)
    private readonly itvRepository: Repository<Vehiculo>,
  ) {}

  async runSeed() {
    await this.deleteTables();
    const adminUser = await this.insertData();

    // await this.insertNewProducts( adminUser );

    return 'SEED EXECUTED';
  }

  private async deleteTables() {
    const segipQueryBuilder = this.segipRepository.createQueryBuilder();
    await segipQueryBuilder.delete().where({}).execute();

    const itvQueryBuilder = this.itvRepository.createQueryBuilder();
    await itvQueryBuilder.delete().where({}).relation('persona').execute();

    const antecedentesQueryBuilder =
      this.antecedentesRepository.createQueryBuilder();
    await antecedentesQueryBuilder.delete().where({}).execute();
  }

  private async insertData() {
    const seedSegip = initialData.segip;
    const segipList: Segip[] = [];

    seedSegip.forEach((segip) => {
      segipList.push(this.segipRepository.create(segip));
    });
    const dbSegip = await this.segipRepository.save(seedSegip);

    const seedItv = initialData.itv;
    const itvList: Vehiculo[] = [];

    seedItv.forEach((itv) => {
      itvList.push(this.itvRepository.create(itv));
    });
    const dbItv = await this.itvRepository.save(seedItv);

    const seedAntecedentes = initialData.antecedentes;

    const antecedentesList: Antecedentes[] = [];

    seedAntecedentes.forEach((antecedente) => {
      antecedentesList.push(this.antecedentesRepository.create(antecedente));
    });

    const dbAntecedentes = await this.antecedentesRepository.save(
      seedAntecedentes,
    );

    return dbSegip[0];
  }

  /*
  private async insertNewProducts( user: User ) {
    await this.productsService.deleteAllProducts();

    const products = initialData.products;

    const insertPromises = [];

    products.forEach( product => {
      insertPromises.push( this.productsService.create( product, user ) );
    });

    await Promise.all( insertPromises );


    return true;
  }
    */
}
