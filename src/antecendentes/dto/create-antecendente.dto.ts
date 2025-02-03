import { IsOptional, IsString, IsDateString, Length, MaxLength, IsUUID } from 'class-validator';

export class CreateAntecendenteDto {

  @IsString()
  @MaxLength(20)
  NumeroDocumento: string;

  @IsString()
  @MaxLength(50)
  Felcc: string;

  @IsString()
  @MaxLength(50)
  Felcn: string;

  @IsString()
  @MaxLength(50)
  Transito: string;
}
