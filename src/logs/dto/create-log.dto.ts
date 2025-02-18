import { IsEmail, IsString, IsUUID, Length, Matches, MaxLength, MinLength } from "class-validator";

export class CreateLogDto {

    @IsUUID()
    user_id: string;

    @IsString()
    @Length(1, 255) 
    busqueda: string;

    @IsString()
    @Length(1, 15)
    tipo: string;
}
