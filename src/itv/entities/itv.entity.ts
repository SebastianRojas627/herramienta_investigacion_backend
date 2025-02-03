import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Persona } from './persona.entity';

@Entity()
export class DatosTecnicos {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  placa: string;

  @Column({ type: 'varchar', length: 50 })
  marca: string;

  @Column({ type: 'varchar', length: 20 })
  modelo: string;

  @Column({ type: 'varchar', length: 50 })
  industria: string;

  @Column({ type: 'varchar', length: 50 })
  clase: string;

  @Column({ type: 'varchar', length: 50 })
  servicio: string;

  @Column({ type: 'varchar', length: 50 })
  tipo_vehiculo: string;

  @Column({ type: 'varchar', length: 50 })
  color: string;

  @Column({ type: 'int' })
  cilindrada: number;

  @Column({ type: 'varchar', length: 50 })
  chasis: string;

  @Column({ type: 'varchar', length: 50 })
  motor: string;

  @Column({ type: 'varchar', length: 50 })
  radicatoria: string;
}

@Entity('itv')
export class Vehiculo {
  @Column()
  existe_data: boolean;

  @Column()
  existe_itv: boolean;

  @Column(() => DatosTecnicos)
  datos_tecnicos: DatosTecnicos;

  @ManyToMany(() => Persona, (persona) => persona.vehiculos, { cascade: true })
  personas: Persona[];
}
