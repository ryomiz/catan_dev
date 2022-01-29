import { Module } from '@nestjs/common';
import { GamesResolver } from './games.resolver';
import { GamesService } from './games.service';

@Module({
  providers: [GamesResolver, GamesService],
})
export class GamesModule {}
