import { Query, Resolver } from '@nestjs/graphql';
import { Game } from './game';
import { GamesService } from './games.service';

@Resolver(() => Game)
export class GamesResolver {
  constructor(private readonly gamesService: GamesService) {}

  @Query(() => [Game])
  games() {
    return this.gamesService.findAll();
  }
}
