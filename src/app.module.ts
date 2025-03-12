import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KnowledgeModule } from './graph/graph.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Neo4jModule } from './neo4j/neo4j.module';
import { DiseaseModule } from './disease/disease.module';
import { ProteinInteractionModule } from './protein-interaction/protein-interaction.module';
import { MetaboliteModule } from './metabolite/metabolite.module';
import { TpmModule } from './tpm/tpm.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/disease'),
    ConfigModule.forRoot(),  // Load environment variables
    Neo4jModule,
    KnowledgeModule,
    Neo4jModule,
    DiseaseModule,
    ProteinInteractionModule,
    MetaboliteModule,
    TpmModule
  ],
})
export class AppModule {}
