import { Injectable } from '@nestjs/common';
import { Neo4jService } from '../neo4j/neo4j.service';

@Injectable()
export class KnowledgeService {
  constructor(private readonly neo4jService: Neo4jService) {}

  async getDiseaseGraph(diseaseName: string) {
    const query = `
      MATCH (g:Gene)-[r:ASSOCIATED_WITH]->(d:Disease {name: $diseaseName})
      RETURN g, d, r
    `;
    const params = { diseaseName };
    const records = await this.neo4jService.runQuery(query, params);
  
    return records.map(record => ({
      gene: record.g.properties,
      disease: record.d.properties,
      relationship: record.r.type
    }));
  }
  
}
