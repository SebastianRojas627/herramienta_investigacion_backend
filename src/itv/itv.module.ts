import { Module } from '@nestjs/common';
import { ItvService } from './itv.service';
import { ItvController } from './itv.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehiculo } from './entities/itv.entity';
import { AuthModule } from 'src/auth/auth.module';
import { Persona } from './entities/persona.entity';

@Module({
  controllers: [ItvController],
  providers: [ItvService],
  imports: [TypeOrmModule.forFeature([Vehiculo]), TypeOrmModule.forFeature([Persona]), AuthModule],
  exports: [TypeOrmModule, ItvService],
})
export class ItvModule {}
