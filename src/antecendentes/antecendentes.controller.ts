import { Controller } from '@nestjs/common';
import { AntecendentesService } from './antecendentes.service';

@Controller('antecendentes')
export class AntecendentesController {
  constructor(private readonly antecendentesService: AntecendentesService) {}
}
