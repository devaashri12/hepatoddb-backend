import { Module } from '@nestjs/common';
import { Neo4jService } from './neo4j.service';

@Module({
  providers: [Neo4jService], // ✅ Provide the service
  exports: [Neo4jService],   // ✅ Export the service for other modules
})
export class Neo4jModule {}
