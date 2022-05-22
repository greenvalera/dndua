import {Inject, Injectable} from '@nestjs/common';
import {Page} from "./models/page.model";

@Injectable()
export class PagesService {
  constructor(
    @Inject('PAGES_REPOSITORY')
    private pagesRepository: typeof Page
  ) {}

  async findAll(): Promise<Page[]> {
    return await this.pagesRepository.findAll();
  }
}
