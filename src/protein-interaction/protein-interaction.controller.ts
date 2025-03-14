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
  ) {
    const query = { protein1, protein2, disease };
    return this.proteinInteractionService.findFilteredInteractions(query);
  }

  @Get('unique-values')
  async getUniqueValues() {
    return this.proteinInteractionService.getUniqueValues();
  }
}
