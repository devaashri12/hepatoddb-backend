import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Metabolite, MetaboliteSchema } from './schema';
import { MetaboliteService } from './metabolite.service';
import { MetaboliteController } from './metabolite.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Metabolite.name, schema: MetaboliteSchema, collection: 'metabolites' }]),
  ],
  controllers: [MetaboliteController],
  providers: [MetaboliteService],
})
export class MetaboliteModule {}
