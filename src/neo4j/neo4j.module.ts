import { Module } from '@nestjs/common';
import { Neo4jService } from './neo4j.service';
import { Neo4jConfig } from './neo4j.config';

@Module({
  providers: [Neo4jService, Neo4jConfig],
  exports: [Neo4jService],
})
export class Neo4jModule {}
