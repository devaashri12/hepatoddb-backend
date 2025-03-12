import { Controller, Get, Query } from '@nestjs/common';
import { TpmService } from './tpm.service';

@Controller('tpm')
export class TpmController {
  constructor(private readonly tpmService: TpmService) {}

  @Get()
  async getTpm(
    @Query('name') gene_name?: string,
    @Query('limit') limit?: string,
    @Query('page') page?: string
  ) {
    if (gene_name) {
      return this.tpmService.findByGeneName(gene_name);
    }

    const limitNum = limit ? parseInt(limit, 10) : 10;
    const pageNum = page ? parseInt(page, 10) : 1;

    return this.tpmService.findAllPaginated(limitNum, pageNum);
  }
}
