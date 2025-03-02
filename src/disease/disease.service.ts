import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Dataset } from "./schemas/disease.schema";

@Injectable()
export class DiseaseService {
  constructor(@InjectModel("Dataset") private datasetModel: Model<Dataset>) {}

  async getDatasetData(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const totalRecords = await this.datasetModel.countDocuments();

    if (totalRecords === 0) {
      return {
        data: [],
        totalRecords: 0,
        currentPage: page,
        totalPages: 0,
      };
    }

    const data = await this.datasetModel.find().skip(skip).limit(limit);

    return {
      data,
      totalRecords,
      currentPage: page,
      totalPages: Math.ceil(totalRecords / limit),
    };
  }
}
