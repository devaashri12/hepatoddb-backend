import { Controller, Get, Query } from '@nestjs/common';
import { MetaboliteService } from './metabolite.service';

@Controller('metabolites')
export class MetaboliteController {
  constructor(private readonly metaboliteService: MetaboliteService) {}

  @Get()
  async getMetabolites(@Query('disease') disease?: string) {
    return this.metaboliteService.findMetabolites(disease);
  }

  @Get('unique-values')
  async getUniqueValues() {
    return this.metaboliteService.getUniqueValues();
  }
}
