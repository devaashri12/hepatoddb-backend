import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MetaboliteDocument = Metabolite & Document;

@Schema({ collection: 'metabolites' })
export class Metabolite {
  @Prop({ required: true })
  disease: string;

  @Prop({ required: true })
  metabolite: string;

  @Prop({ required: true })
  associated_drug: string;
}

export const MetaboliteSchema = SchemaFactory.createForClass(Metabolite);
