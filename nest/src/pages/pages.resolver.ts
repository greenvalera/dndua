import {Query, Resolver} from '@nestjs/graphql';
import {Page} from "./models/page.model";
import {PagesService} from "./pages.service";

@Resolver(() => Page)
export class PagesResolver {
  constructor(
    private pagesService: PagesService
  ) {}

  @Query(() => [Page])
  async pages(): Promise<Page[]> {
    return await this.pagesService.findAll();
  }
}
