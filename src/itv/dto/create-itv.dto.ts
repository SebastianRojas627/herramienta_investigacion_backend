import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsDateString, IsInt, IsString, Length, MaxLength, MinLength, ValidateNested, IsOptional } from 'class-validator';

export class PersonaDto {
  @IsString()
  @MaxLength(50)
  gestion: string;

  @IsString()
  @MaxLength(50)
  nombre: string;

  @IsString()
  @MaxLength(50)
  paterno: string;

  @IsString()
  @MaxLength(50)
  materno: string;

  @IsString()
  @MaxLength(50)
  nro_documento: string;

  @IsString()
  @MaxLength(50)
  expedicion: string;

  @IsString()
  @MaxLength(50)
  domicilio: string;

  @IsDateString() // Cambio a IsDateString si es una fecha
  fecha_nacimiento: string;

  @IsString()
  @MaxLength(50)
  sexo: string;

  @IsString()
  @MaxLength(50)
  nro_celular: string;

  @IsString()
  @MaxLength(50)
  email: string;

  @IsString()
  @MaxLength(50)
  categoria_licencia: string;

  @IsString()
  @MaxLength(50)
  documento_complemento: string;
}

class DatosTecnicos {
  @IsString()
  @Length(6, 10)
  placa: string;

  @IsString()
  @MaxLength(50)
  marca: string;

  @IsString()
  @Length(4, 4)
  modelo: string;

  @IsString()
  @MaxLength(50)
  industria: string;

  @IsString()
  @MaxLength(50)
  clase: string;

  @IsString()
  @MaxLength(50)
  servicio: string;

  @IsString()
  @MaxLength(50)
  tipo_vehiculo: string;

  @IsString()
  @MaxLength(50)
  color: string;

  @IsInt()
  cilindrada: number;

  @IsString()
  @MaxLength(50)
  chasis: string;

  @IsString()
  @MaxLength(50)
  motor: string;

  @IsString()
  @MaxLength(50)
  radicatoria: string;
}

export class CreateItvDto {

  @IsBoolean()
  existe_data: boolean;

  @IsBoolean()
  existe_itv: boolean;

  @ValidateNested()
  @Type(() => DatosTecnicos)
  datos_tecnicos: DatosTecnicos;

  @IsArray()
  personas: PersonaDto[];
}
