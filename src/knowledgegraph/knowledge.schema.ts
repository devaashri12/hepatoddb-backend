import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'dataset' }) // Ensuring it uses the 'dataset' collection
export class Knowledge extends Document {
  @Prop({ required: true })
  disease: string;

  @Prop({ required: true })
  gene_id: string;

  @Prop({ required: true })
  gene_name: string;
}

export const KnowledgeSchema = SchemaFactory.createForClass(Knowledge);
