import { Injectable, OnModuleDestroy } from '@nestjs/common';
import neo4j, { Driver, Session } from 'neo4j-driver';

@Injectable()
export class Neo4jService implements OnModuleDestroy {
  private driver: Driver;
  private readonly uri = 'bolt://localhost:7687'; // Update if needed
  private readonly user = 'neo4j'; // Neo4j Username
  private readonly password = 'neo4jneo4j'; // Neo4j Password

  constructor() {
    this.driver = neo4j.driver(this.uri, neo4j.auth.basic(this.user, this.password));
  }

  async runQuery(query: string, params: any = {}): Promise<any> {
    const session: Session = this.driver.session();
    try {
      const result = await session.run(query, params);
      return result.records.map(record => record.toObject());
    } finally {
      await session.close();
    }
  }

  async onModuleDestroy() {
    await this.driver.close();
  }
}
