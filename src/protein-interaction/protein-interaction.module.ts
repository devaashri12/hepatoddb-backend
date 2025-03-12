import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProteinInteraction, ProteinInteractionSchema } from './schema';
import { ProteinInteractionService } from './protein-interaction.service';
import { ProteinInteractionController } from './protein-interaction.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ProteinInteraction.name, schema: ProteinInteractionSchema, collection: 'proteinInteractions' }]),
  ],
  controllers: [ProteinInteractionController],
  providers: [ProteinInteractionService],
})
export class ProteinInteractionModule {}
