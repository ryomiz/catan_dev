import { Query, Resolver } from '@nestjs/graphql';
import { Title } from './title';
import { TitlesService } from './titles.service';

@Resolver((of) => Title)
export class TitlesResolver {
  constructor(private readonly titlesService: TitlesService) {}

  @Query((returns) => [Title])
  titles() {
    return this.titlesService.findAll();
  }
}
