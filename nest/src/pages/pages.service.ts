import {Inject, Injectable} from '@nestjs/common';
import {Page} from "./models/page.model";
import {randomUUID} from "crypto";
import * as path from "path";
import * as fs from "fs";

interface CreateAttrs {
  content: string
}

@Injectable()
export class PagesService {
  constructor(
    @Inject('PAGES_REPOSITORY')
    private pagesRepository: typeof Page
  ) {}

  async findAll(): Promise<Page[]> {
    return await this.pagesRepository.findAll();
  }

  async create({content}: CreateAttrs): Promise<Page> {
    const id = randomUUID();
    return await this.pagesRepository.create({id, content});
  }

  getTextByPage(page: Page): string {
    const baseDir = path.resolve(
      __dirname, '..', '..', 'dnd5srd', 'Documents'
    );

    console.log(page);

    const fileName = `${page.content}.md`;
    const filePath = path.join(baseDir, fileName);

    const content = fs.readFileSync(filePath).toString();

    console.log(content);

    return content;
  }
}
