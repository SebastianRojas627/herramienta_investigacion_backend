import { Module } from '@nestjs/common';

import { AuthModule } from './../auth/auth.module';

import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Antecedentes } from 'src/antecendentes/entities/antecendente.entity';
import { Segip } from 'src/segip/entities/segip.entity';
import { Vehiculo } from 'src/itv/entities/itv.entity';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([Antecedentes, Segip, Vehiculo])
  ]
})
export class SeedModule {}
