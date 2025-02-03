import { Module } from '@nestjs/common';
import { AntecendentesService } from './antecendentes.service';
import { AntecendentesController } from './antecendentes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Antecedentes } from './entities/antecendente.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [AntecendentesController],
  providers: [AntecendentesService],
  imports: [TypeOrmModule.forFeature([Antecedentes]), AuthModule],
  exports: [TypeOrmModule, AntecendentesService],
})
export class AntecendentesModule {}
