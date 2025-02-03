import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

export const handleDBErrors = (error: any): never => {
  if (error.code === '23505') throw new BadRequestException(error.detail);

  console.log(error);

  throw new InternalServerErrorException('Please check server logs');
};

function dividirNombre(
  nombreCompleto: string,
  apellidoReferencia: string,
): { nombres: string; apellidoPaterno: string; apellidoMaterno: string } {
  const palabras = nombreCompleto.split(' ');
  const apellidoRefPalabras = apellidoReferencia.split(' ');

  let indiceInicio = -1;
  for (let i = 0; i <= palabras.length - apellidoRefPalabras.length; i++) {
    if (
      palabras.slice(i, i + apellidoRefPalabras.length).join(' ') ===
      apellidoReferencia
    ) {
      indiceInicio = i;
      break;
    }
  }

  if (indiceInicio !== -1) {
    const nombres = palabras.slice(0, indiceInicio).join(' ');
    const apellidoPaterno = palabras
      .slice(indiceInicio, indiceInicio + apellidoRefPalabras.length)
      .join(' ');
    const apellidoMaterno = palabras
      .slice(indiceInicio + apellidoRefPalabras.length)
      .join(' ');
    return { nombres, apellidoPaterno, apellidoMaterno };
  }

  return { nombres: nombreCompleto, apellidoPaterno: '', apellidoMaterno: '' };
}

export function dividirNombrePadre(nombrePadre: string, apellidoPaternoHijo: string) {
  return dividirNombre(nombrePadre, apellidoPaternoHijo);
}

export function dividirNombreMadre(nombreMadre: string, apellidoMaternoHijo: string) {
  return dividirNombre(nombreMadre, apellidoMaternoHijo);
}
