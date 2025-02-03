import { IsOptional, IsString, Length } from 'class-validator';

export class CreateSearchDto {
  @IsString()
  @Length(1, 255)
  query: string;

  @IsOptional()
  @IsString()
  ced?: string; // NumeroDocumento

  @IsOptional()
  @IsString()
  com?: string; // Complemento

  @IsOptional()
  @IsString()
  nom?: string; // Nombres

  @IsOptional()
  @IsString()
  pat?: string; // PrimerApellido

  @IsOptional()
  @IsString()
  mat?: string; // SegundoApellido
}
