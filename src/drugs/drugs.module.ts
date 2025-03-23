import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DrugsController } from './drugs.controller';
import { DrugsService } from './drugs.service';
import { Drug, DrugSchema } from './schemas/drugs.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Drug.name, schema: DrugSchema }])],
  controllers: [DrugsController],
  providers: [DrugsService],
})
export class DrugsModule {}
