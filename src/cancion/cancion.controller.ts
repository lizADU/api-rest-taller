import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Cancion } from './cancion.entity';
import { CancionService } from './cancion.service';

@Controller('canciones')
export class CancionController {
  constructor(private readonly cancionService: CancionService) {}

  @Get()
  async findAll(): Promise<any[]> {
    const canciones = await this.cancionService.findAll();
    return Promise.all(canciones.map(async (cancion) => {
      const { cantante, ...restoCancion } = cancion;
      const nombreCantante = cantante ? cantante.nombre : null;
      return {
        ...restoCancion,
        nombreCantante,
      };
    }));
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    const cancion = await this.cancionService.findOne(id);
    const { cantante, ...restoCancion } = cancion;
    const nombreCantante = cantante ? cantante.nombre : null;
    return {
      ...restoCancion,
      nombreCantante,
    };
  }

  @Post()
  create(@Body() cancion: Cancion): Promise<Cancion> {
    return this.cancionService.create(cancion);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() cancion: Cancion): Promise<Cancion> {
    return this.cancionService.update(id, cancion);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.cancionService.remove(id);
  }
}
