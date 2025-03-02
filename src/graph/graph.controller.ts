import { Controller, Post } from '@nestjs/common';
import { GraphService } from './graph.service';

@Controller('graph')
export class GraphController {
  constructor(private readonly graphService: GraphService) {}

  @Post('generate')
  async generateGraph() {
    const filePath = './disease.csv'; // Replace with actual path
    return await this.graphService.processCSV(filePath);
  }
}
