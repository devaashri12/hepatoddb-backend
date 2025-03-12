import { Controller, Get, Query } from '@nestjs/common';
import { ProteinInteractionService } from './protein-interaction.service';

@Controller('protein-interaction')
export class ProteinInteractionController {
  constructor(private readonly proteinInteractionService: ProteinInteractionService) {}

  @Get()
  async getProteinInteractions(
    @Query('protein1') protein1?: string,
    @Query('protein2') protein2?: string,
    @Query('disease') disease?: string,
    @Query('page') page = '1',
    @Query('limit') limit = '10'
  ) {
    const query = { protein1, protein2, disease };

    // Convert page and limit to numbers with default values
    const pageNum = Math.max(parseInt(page, 10) || 1, 1);
    const limitNum = Math.max(parseInt(limit, 10) || 10, 1);

    return this.proteinInteractionService.findFilteredInteractions(query, pageNum, limitNum);
  }
}
