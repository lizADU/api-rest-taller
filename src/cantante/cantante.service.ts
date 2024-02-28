import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cantante } from './cantante.entity';

@Injectable()
export class CantanteService {
  constructor(
    @InjectRepository(Cantante)
    private cantanteRepository: Repository<Cantante>,
  ) {}

  async findAll(): Promise<Cantante[]> {
    return this.cantanteRepository.find();
  }

  async findOne(id: string): Promise<Cantante> {
    return this.cantanteRepository.findOne({ where: { id } });
  }

  async create(cantante: Cantante): Promise<Cantante> {
    return this.cantanteRepository.save(cantante);
  }

  async update(id: string, cantante: Cantante): Promise<Cantante> {
    await this.cantanteRepository.update(id, cantante);
    return this.cantanteRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.cantanteRepository.delete(id);
  }
}
