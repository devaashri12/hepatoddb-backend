import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: "dataset" }) // Using the new collection name
export class Dataset extends Document {
  @Prop()
  disease: string;

  @Prop()
  disease_id: string;

  @Prop()
  gene_id: string;

  @Prop()
  gene_name: string;

  @Prop()
  protein_name: string;

  @Prop()
  pathway: string;
}

export const DatasetSchema = SchemaFactory.createForClass(Dataset);
