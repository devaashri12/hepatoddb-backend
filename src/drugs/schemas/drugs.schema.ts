import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'drugs' }) // Explicitly specify the collection name
export class Drug extends Document {
  @Prop({ required: true })
  disease: string;

  @Prop({ required: true })
  drug: string;

  @Prop()
  effect: string;

  @Prop()
  severity: string;

  @Prop()
  source: string;
}

export const DrugSchema = SchemaFactory.createForClass(Drug);
