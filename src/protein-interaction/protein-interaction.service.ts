import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProteinInteraction, ProteinInteractionDocument } from './schema';

@Injectable()
export class ProteinInteractionService {
  constructor(
    @InjectModel(ProteinInteraction.name)
    private readonly proteinInteractionModel: Model<ProteinInteractionDocument>,
  ) {}

  async findFilteredInteractions(query: any): Promise<{ data: ProteinInteraction[] }> {
    const filter: any = {};

    if (query.protein1) {
      filter.protein1 = query.protein1;
    }
    if (query.protein2) {
      filter.protein2 = query.protein2;
    }
    if (query.disease) {
      filter.disease = query.disease;
    }
    
    const data = await this.proteinInteractionModel.find(filter).exec();
    return { data };
  }

  async getUniqueValues() {
    const protein1 = await this.proteinInteractionModel.distinct('protein1').exec();
    const protein2 = await this.proteinInteractionModel.distinct('protein2').exec();
    const disease = await this.proteinInteractionModel.distinct('disease').exec();

    return { protein1, protein2, disease };
  }
}
