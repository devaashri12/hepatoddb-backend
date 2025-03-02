import { Controller, Get, Query } from "@nestjs/common";
import { DiseaseService } from "./disease.service";

@Controller("disease")
export class DiseaseController {
  constructor(private readonly diseaseService: DiseaseService) {}

  @Get()
  async getDatasetData(@Query("page") page: string, @Query("limit") limit: string) {
    const pageNumber = parseInt(page, 10) || 1;
    const limitNumber = parseInt(limit, 10) || 10;

    return this.diseaseService.getDatasetData(pageNumber, limitNumber);
  }
}
