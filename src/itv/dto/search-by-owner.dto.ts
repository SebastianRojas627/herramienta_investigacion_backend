import { IsString } from 'class-validator';

export class SearchByOwnerDto {
  @IsString()
  nro_documento: string; // Numero de documento del dueño
}
