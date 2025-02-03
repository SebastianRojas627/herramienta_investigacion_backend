import { Controller } from '@nestjs/common';
import { ItvService } from './itv.service';

@Controller('itv')
export class ItvController {
  constructor(private readonly itvService: ItvService) {}
}
