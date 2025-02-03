import { Module } from '@nestjs/common';
import { SegipService } from './segip.service';
import { SegipController } from './segip.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Segip } from './entities/segip.entity';

@Module({
  controllers: [SegipController],
  providers: [SegipService],
  imports: [TypeOrmModule.forFeature([Segip]), AuthModule],
  exports: [TypeOrmModule, SegipService],
})
export class SegipModule {}
