import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tpm, TpmDocument } from './schema';

@Injectable()
export class TpmService {
  constructor(
    @InjectModel(Tpm.name)
    private readonly tpmModel: Model<TpmDocument>,
  ) {}

  async findAllPaginated(limit: number, page: number): Promise<{ data: Tpm[], total: number }> {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      this.tpmModel.find().skip(skip).limit(limit).exec(),
      this.tpmModel.countDocuments(),
    ]);
    return { data, total };
  }

  async findByGeneName(gene_name: string): Promise<{ data: Tpm[] }> {
    const data = await this.tpmModel.find({ gene_name }).exec();
    return { data };
  }
}
