import { Module } from '@nestjs/common';
import { LogsService } from './logs.service';
import { LogsController } from './logs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from './entities/log.entity';
import { User } from 'src/auth/entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [LogsController],
  providers: [LogsService],
  imports: [
    TypeOrmModule.forFeature([Log]),
    AuthModule,
  ],
  exports: [
    TypeOrmModule,
    LogsService
  ]

})
export class LogsModule {}
