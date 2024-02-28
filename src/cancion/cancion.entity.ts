import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cantante } from '../cantante/cantante.entity';

@Entity()
export class Cancion {
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column()
    titulo: string;
  
    @Column()
    cantante_id: string;
  
    @Column()
    duracion: string;
  
    @Column()
    lanzamiento: string;
  
    @Column()
    albun: string;

  @ManyToOne(() => Cantante, cantante => cantante.canciones)
  cantante: Cantante;
}
