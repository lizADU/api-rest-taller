import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cancion } from '../cancion/cancion.entity';

@Entity()
export class Cantante {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  fecha_nacimiento: string;

  @Column()
  genero: string;

  @OneToMany(() => Cancion, cancion => cancion.cantante)
  canciones: Cancion[];
}
