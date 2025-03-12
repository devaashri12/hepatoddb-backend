import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TpmDocument = Tpm & Document;

@Schema({ collection: 'tpm' })
export class Tpm {
  @Prop({ required: true })
  gene_id: string;

  @Prop({ required: true })
  gene_name: string;

  @Prop({ required: true })
  liver: string;
}

export const TpmSchema = SchemaFactory.createForClass(Tpm);
