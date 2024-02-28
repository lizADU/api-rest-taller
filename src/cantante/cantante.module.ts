import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cantante } from './cantante.entity';
import { CantanteController } from './cantante.controller';
import { CantanteService } from './cantante.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cantante])],
  controllers: [CantanteController],
  providers: [CantanteService],
})
export class CantanteModule {}
