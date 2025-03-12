import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Metabolite, MetaboliteDocument } from './schema';

@Injectable()
export class MetaboliteService {
  constructor(
    @InjectModel(Metabolite.name)
    private readonly metaboliteModel: Model<MetaboliteDocument>,
  ) {}

  async findMetabolites(disease?: string): Promise<Metabolite[]> {
    const filter = disease ? { disease } : {};
    return this.metaboliteModel.find(filter).exec();
  }
}
