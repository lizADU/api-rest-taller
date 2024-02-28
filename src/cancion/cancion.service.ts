import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cancion } from './cancion.entity';

@Injectable()
export class CancionService {
  constructor(
    @InjectRepository(Cancion)
    private cancionRepository: Repository<Cancion>,
  ) {}

  async findAll(): Promise<Cancion[]> {
    return this.cancionRepository.find();
  }

  async findOne(id: string): Promise<Cancion> {
    return await this.cancionRepository.findOne({ where: { id } });
  }
  
  async create(cancion: Cancion): Promise<Cancion> {
    return this.cancionRepository.save(cancion);
  }

  async update(id: string, cancion: Cancion): Promise<Cancion> {
    await this.cancionRepository.update(id, cancion);
    return this.cancionRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.cancionRepository.delete(id);
  }
}
