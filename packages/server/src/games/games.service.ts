import { Injectable } from '@nestjs/common';
import { Game } from './game';

@Injectable()
export class GamesService {
  private readonly games: Game[] = [
    {
      id: 1,
      name: '深夜カタン',
      titleId: 1,
      userIds: [1, 2],
    },
    {
      id: 1,
      name: '早朝カタン',
      titleId: 2,
      userIds: [2, 3],
    },
  ];

  constructor() {}

  findAll() {
    return this.games;
  }
}
