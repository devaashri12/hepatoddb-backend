import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tpm, TpmSchema } from './schema';
import { TpmService } from './tpm.service';
import { TpmController } from './tpm.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tpm.name, schema: TpmSchema, collection: 'tpm' }]),
  ],
  controllers: [TpmController],
  providers: [TpmService],
})
export class TpmModule {}
