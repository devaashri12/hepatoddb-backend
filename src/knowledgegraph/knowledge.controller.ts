import { Controller, Get, Param } from '@nestjs/common';
import { KnowledgeService } from './knowledge.service';

@Controller('knowledge')
export class KnowledgeController {
  constructor(private readonly knowledgeService: KnowledgeService) {}

  @Get(':disease')
  async getGraph(@Param('disease') disease: string) {
    return this.knowledgeService.getDiseaseGraph(disease);
  }
}
