import { IsOptional, IsString } from 'class-validator';

export class SearchAntecedentesDto {
  @IsString()
  NumeroDocumento: string; // Numero documento
}
