import { Query, Resolver } from '@nestjs/graphql';
import { Game } from './game';
import { GamesService } from './games.service';

@Resolver((of) => Game)
export class GamesResolver {
  constructor(private readonly gamesService: GamesService) {}

  @Query((returns) => [Game])
  games() {
    return this.gamesService.findAll();
  }
}
