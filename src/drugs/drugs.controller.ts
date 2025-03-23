import { Controller, Get, Query } from '@nestjs/common';
import { DrugsService } from './drugs.service';

@Controller('drugs')
export class DrugsController {
  constructor(private readonly drugsService: DrugsService) {}

  @Get()
  async getDrugs(@Query('disease') disease?: string) {
    const query = { disease };
    return this.drugsService.findFilteredDrugs(query);
  }

  @Get('unique-values')
  async getUniqueDiseases() {
    return this.drugsService.getUniqueDiseases();
  }
}
