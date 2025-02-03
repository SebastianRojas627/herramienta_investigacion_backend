import { Vehiculo } from 'src/itv/entities/itv.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Persona {
  @Column({ type: 'varchar', length: 50 })
  gestion: string;

  @Column({ type: 'varchar', length: 50 })
  nombre: string;

  @Column({ type: 'varchar', length: 50 })
  paterno: string;

  @Column({ type: 'varchar', length: 50 })
  materno: string;

  @PrimaryColumn({ type: 'varchar', length: 50 })
  nro_documento: string;

  @Column({ type: 'varchar', length: 50 })
  expedicion: string;

  @Column({ type: 'varchar', length: 50 })
  domicilio: string;

  @Column({ type: 'varchar', length: 50 })
  fecha_nacimiento: string;

  @Column({ type: 'varchar', length: 50 })
  sexo: string;

  @Column({ type: 'varchar', length: 50 })
  nro_celular: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @Column({ type: 'varchar', length: 50 })
  categoria_licencia: string;

  @Column({ type: 'varchar', length: 50 })
  documento_complemento: string;

  @ManyToMany(() => Vehiculo, (vehiculo) => vehiculo.personas)
  @JoinTable()
  vehiculos: Vehiculo[];
}
