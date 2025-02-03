import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { AuthModule } from 'src/auth/auth.module';
import { LogsModule } from 'src/logs/logs.module';
import { HttpModule } from '@nestjs/axios';
import { SegipModule } from 'src/segip/segip.module';
import { AntecendentesModule } from 'src/antecendentes/antecendentes.module';
import { ItvModule } from 'src/itv/itv.module';

@Module({
  controllers: [SearchController],
  providers: [SearchService],
  imports: [
    LogsModule,
    SegipModule,
    AntecendentesModule,
    ItvModule,
    AuthModule,
    HttpModule
  ],
})
export class SearchModule {}
