import { IsOptional, IsString } from 'class-validator';

export class SearchSegipDto {
  @IsString()
  ced: string; // NumeroDocumento

  @IsString()
  com: string; // Complemento

  @IsString()
  nom: string; // Nombres

  @IsString()
  pat: string; // PrimerApellido

  @IsString()
  mat: string; // SegundoApellido
}
