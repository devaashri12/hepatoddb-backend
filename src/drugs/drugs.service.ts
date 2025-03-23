import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Drug } from './schemas/drugs.schema';

@Injectable()
export class DrugsService {
  constructor(
    @InjectModel(Drug.name) private readonly drugModel: Model<Drug>,
  ) {}

  async findFilteredDrugs(query: any): Promise<{ data: Drug[] }> {
    const filter: any = {};

    if (query.disease) {
      filter.disease = query.disease;
    }

    const data = await this.drugModel.find(filter).exec();
    return { data };
  }

  async getUniqueDiseases() {
    const diseases = await this.drugModel.distinct('disease').exec();
    return { diseases };
  }
}
