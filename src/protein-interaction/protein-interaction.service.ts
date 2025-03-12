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

  async findFilteredInteractions(query: any, page: number, limit: number): Promise<{ data: ProteinInteraction[], total: number, page: number, limit: number }> {
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

    // Pagination calculation
    const skip = (page - 1) * limit;
    
    const data = await this.proteinInteractionModel.find(filter).skip(skip).limit(limit).exec();
    const total = await this.proteinInteractionModel.countDocuments(filter);

    return { data, total, page, limit };
  }
}
