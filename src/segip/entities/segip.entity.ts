import {
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Segip {
  @Column({ type: 'varchar', length: 10 })
  Complemento: string;

  @Column({ type: 'varchar', length: 255 })
  Domicilio: string;

  @Column({ type: 'varchar', length: 20 })
  EstadoCivil: string;

  @Column({ type: 'date' })
  FechaNacimiento: Date;

  @Column({ type: 'varchar', length: 50 })
  LugarNacimientoDepartamento: string;

  @Column({ type: 'varchar', length: 50 })
  LugarNacimientoLocalidad: string;

  @Column({ type: 'varchar', length: 50 })
  LugarNacimientoPais: string;

  @Column({ type: 'varchar', length: 50 })
  LugarNacimientoProvincia: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  NombreCompletoConyuge?: string;

  @Column({ type: 'varchar', length: 100 })
  NombreCompletoMadre: string;

  @Column({ type: 'varchar', length: 100 })
  NombreCompletoPadre: string;

  @PrimaryColumn({ type: 'varchar', length: 20 })
  NumeroDocumento: string;

  @Column({ type: 'varchar', length: 50 })
  ProcedenciaRegistro: string;

  @Column({ type: 'varchar', length: 50 })
  Nombres: string;

  @Column({ type: 'varchar', length: 50 })
  PrimerApellido: string;

  @Column({ type: 'varchar', length: 50 })
  ProfesionOcupacion: string;

  @Column({ type: 'varchar', length: 50 })
  SegundoApellido: string;

  @Column({ type: 'varchar' })
  ComplementoVisible: string;

  @Column({ type: 'varchar', length: 50 })
  TipoRegistro: string;

  @Column({ type: 'varchar', length: 10 })
  Genero: string;

  @Column({ type: 'varchar', length: 50 })
  Nacionalidad: string;

  @Column({ type: 'varchar', length: 5, nullable: true })
  GrupoSanguineo?: string;

  @Column({ type: 'varchar', length: 50 })
  LugarExpedicion: string;
}
