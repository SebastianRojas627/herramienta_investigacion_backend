import { IsOptional, IsString, IsDateString, Length, MaxLength, IsUUID } from 'class-validator';

export class CreateSegipDto {
  @IsUUID()
  id: string;

  @IsString()
  @Length(1, 10)
  Complemento: string;

  @IsString()
  @MaxLength(255)
  Domicilio: string;

  @IsString()
  @MaxLength(20)
  EstadoCivil: string;

  @IsDateString()
  FechaNacimiento: Date;

  @IsString()
  @MaxLength(50)
  LugarNacimientoDepartamento: string;

  @IsString()
  @MaxLength(50)
  LugarNacimientoLocalidad: string;

  @IsString()
  @MaxLength(50)
  LugarNacimientoPais: string;

  @IsString()
  @MaxLength(50)
  LugarNacimientoProvincia: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  NombreCompletoConyuge?: string;

  @IsString()
  @MaxLength(100)
  NombreCompletoMadre: string;

  @IsString()
  @MaxLength(100)
  NombreCompletoPadre: string;

  @IsString()
  @Length(1, 20)
  NumeroDocumento: string;

  @IsString()
  @MaxLength(50)
  ProcedenciaRegistro: string;

  @IsString()
  @MaxLength(50)
  Nombres: string;

  @IsString()
  @MaxLength(50)
  PrimerApellido: string;

  @IsString()
  @MaxLength(50)
  ProfesionOcupacion: string;

  @IsString()
  @MaxLength(50)
  SegundoApellido: string;

  @IsString()
  ComplementoVisible: string;

  @IsString()
  @MaxLength(50)
  TipoRegistro: string;

  @IsString()
  @Length(1, 10)
  Genero: string;

  @IsString()
  @MaxLength(50)
  Nacionalidad: string;

  @IsOptional()
  @IsString()
  @Length(1, 5)
  GrupoSanguineo?: string;

  @IsString()
  @MaxLength(50)
  LugarExpedicion: string;
}
