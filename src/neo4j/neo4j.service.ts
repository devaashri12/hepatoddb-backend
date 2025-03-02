import { Injectable, OnModuleInit } from '@nestjs/common';
import neo4j, { Driver } from 'neo4j-driver';
import { Neo4jConfig } from './neo4j.config';

@Injectable()
export class Neo4jService implements OnModuleInit {
  private driver: Driver;

  constructor(private readonly config: Neo4jConfig) {}

  async onModuleInit() {
    this.driver = neo4j.driver(
      this.config.NEO4J_URI,
      neo4j.auth.basic(this.config.NEO4J_USER, this.config.NEO4J_PASSWORD),
    );
  }

  async runQuery(query: string, params = {}) {
    const session = this.driver.session();
    try {
      return await session.run(query, params);
    } finally {
      await session.close();
    }
  }
}
