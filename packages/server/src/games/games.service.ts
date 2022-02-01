import { Injectable } from '@nestjs/common';
import { Game } from './game';

@Injectable()
export class GamesService {
  private readonly games: Game[] = [
    {
      id: 1,
      name: '深夜カタン',
      title: {
        id: 1,
        title: 'カタンの開拓者',
      },
      users: [
        {
          id: 1,
          name: 'Ryo',
          role: 'user',
        },
        {
          id: 2,
          name: 'Suke',
          role: 'user',
        },
      ],
    },
    {
      id: 1,
      name: '早朝カタン',
      title: {
        id: 2,
        title: 'カタンの開拓者 騎士編',
      },
      users: [
        {
          id: 2,
          name: 'Suke',
          role: 'user',
        },
        {
          id: 3,
          name: 'Miz',
          role: 'user',
        },
      ],
    },
  ];

  constructor() {}

  findAll() {
    return this.games;
  }
}
