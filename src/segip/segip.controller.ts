import { Controller } from '@nestjs/common';
import { SegipService } from './segip.service';

@Controller('segip')
export class SegipController {
  constructor(private readonly segipService: SegipService) {}
}
