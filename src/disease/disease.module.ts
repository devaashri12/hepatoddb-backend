import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DiseaseController } from "./disease.controller";
import { DiseaseService } from "./disease.service";
import { DatasetSchema } from "./schemas/disease.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Dataset", schema: DatasetSchema }])],
  controllers: [DiseaseController],
  providers: [DiseaseService],
})
export class DiseaseModule {}
