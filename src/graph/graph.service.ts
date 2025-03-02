import { Injectable } from '@nestjs/common';
import { Neo4jService } from 'src/neo4j/neo4j.service';
import * as fs from 'fs';
import * as csvParser from 'csv-parser';

@Injectable()
export class GraphService {
  constructor(private readonly neo4jService: Neo4jService) {}

  async processCSV(filePath: string): Promise<string> {
    interface CSVRecord {
      [key: string]: string;
    }

    const records: CSVRecord[] = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (row) => records.push(row))
        .on('end', async () => {
          try {
            console.log(`Processing ${records.length} records...`);
            await this.insertIntoGraph(records);
            resolve('Graph created successfully!');
          } catch (error) {
            reject(`Error inserting records: ${error.message}`);
          }
        })
        .on('error', reject);
    });
  }

  async insertIntoGraph(records: any[]) {
    for (const record of records) {
      console.log("Processing record:", record);

      // Normalize field names
      const disease = this.getFieldValue(record, ["Disease", " disease", "disease"]);
      const geneID = this.getFieldValue(record, ["GeneID", " GeneID", "geneid"]);
      const geneSymbol = this.getFieldValue(record, ["Gene Name", " Gene Name", "gene name"]);
      const proteinName = this.getFieldValue(record, ["Protein Name", " Protein Name", "protein name"]);

      console.log("Extracted Fields ->", { disease, geneID, geneSymbol, proteinName });

      if (!disease || !geneID || !geneSymbol || !proteinName) {
        console.warn("Skipping record due to missing fields:", record);
        continue;
      }

      // Insert Nodes
      await this.neo4jService.runQuery(
        `MERGE (d:Disease {name: $disease})`,
        { disease }
      );
      await this.neo4jService.runQuery(
        `MERGE (g:Gene {id: $geneID, symbol: $geneSymbol})`,
        { geneID, geneSymbol }
      );
      await this.neo4jService.runQuery(
        `MERGE (p:Protein {name: $proteinName})`,
        { proteinName }
      );

      // Create Relationships
      await this.neo4jService.runQuery(
        `MATCH (d:Disease {name: $disease}), (g:Gene {symbol: $geneSymbol})
         MERGE (d)-[:ASSOCIATED_WITH]->(g)`,
        { disease, geneSymbol }
      );

      await this.neo4jService.runQuery(
        `MATCH (g:Gene {symbol: $geneSymbol}), (p:Protein {name: $proteinName})
         MERGE (g)-[:ENCODES]->(p)`,
        { geneSymbol, proteinName }
      );
    }
  }

  /**
   * Helper function to extract and clean field values
   */
  private getFieldValue(record: any, possibleKeys: string[]): string | null {
    for (const key of possibleKeys) {
      if (record[key]?.trim()) {
        return record[key].trim();
      }
    }
    return null;
  }
}
