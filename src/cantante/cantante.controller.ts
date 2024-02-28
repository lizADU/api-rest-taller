import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Cantante } from './cantante.entity';
import { CantanteService } from './cantante.service';

@Controller('cantantes')
export class CantanteController {
  constructor(private readonly cantanteService: CantanteService) {}

  @Get()
  findAll(): Promise<Cantante[]> {
    return this.cantanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Cantante> {
    return this.cantanteService.findOne(id);
  }

  @Post()
  create(@Body() cantante: Cantante): Promise<Cantante> {
    return this.cantanteService.create(cantante);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() cantante: Cantante): Promise<Cantante> {
    return this.cantanteService.update(id, cantante);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.cantanteService.remove(id);
  }
}
