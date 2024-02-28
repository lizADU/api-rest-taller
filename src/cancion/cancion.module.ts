import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cancion } from './cancion.entity';
import { CancionController } from './cancion.controller';
import { CancionService } from './cancion.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cancion])],
  controllers: [CancionController],
  providers: [CancionService],
})
export class CancionModule {}
