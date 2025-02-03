import { IsOptional, IsString } from 'class-validator';

export class SearchItvDto {
  @IsString()
  placa: string; // Placa vehiculo
}
