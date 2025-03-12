import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProteinInteractionDocument = ProteinInteraction & Document;

@Schema({ collection: 'proteinInteractions' }) // Ensure correct collection name
export class ProteinInteraction {
  @Prop({ required: true })
  protein1: string;

  @Prop({ required: true })
  protein2: string;

  @Prop({ required: true })
  score: string;

  @Prop({ required: true })
  disease: string;
}

export const ProteinInteractionSchema = SchemaFactory.createForClass(ProteinInteraction);
