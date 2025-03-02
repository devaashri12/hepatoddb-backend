import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

@Injectable()
export class Neo4jConfig {
  public readonly NEO4J_URI = process.env.NEO4J_URI || 'bolt://localhost:7687';
  public readonly NEO4J_USER = process.env.NEO4J_USER || 'neo4j';
  public readonly NEO4J_PASSWORD = process.env.NEO4J_PASSWORD || 'neo4jneo4j';
}
