import { Driver, auth, driver } from 'neo4j-driver';
import { ConfigService } from '@nestjs/config';

export const createNeo4jDriver = (configService: ConfigService): Driver => {
  return driver(
    configService.get<string>('NEO4J_URI') || 'bolt://localhost:7687',
    auth.basic(
      configService.get<string>('NEO4J_USER') || 'neo4j',
      configService.get<string>('NEO4J_PASSWORD') || 'neo4jneo4j',
    ),
  );
};
