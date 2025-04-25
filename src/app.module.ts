import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KnowledgeModule } from './graph/graph.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Neo4jModule } from './neo4j/neo4j.module';
import { DiseaseModule } from './disease/disease.module';
import { ProteinInteractionModule } from './protein-interaction/protein-interaction.module';
import { MetaboliteModule } from './metabolite/metabolite.module';
import { TpmModule } from './tpm/tpm.module';
import { DrugsModule } from './drugs/drugs.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://osjohn01:osjohn01@osjohncluster.nr7tiih.mongodb.net/disease'),
    ConfigModule.forRoot(),  // Load environment variables
    Neo4jModule,
    KnowledgeModule,
    Neo4jModule,
    DiseaseModule,
    ProteinInteractionModule,
    MetaboliteModule,
    TpmModule,
    DrugsModule
  ],
})
export class AppModule {}
