import { Injectable } from '@nestjs/common';

@Injectable()
export class TitlesService {
  private titles = [
    {
      id: 1,
      title: 'カタンの開拓者',
    },
    {
      id: 2,
      title: 'カタン 都市と騎士版',
    },
  ];
  constructor() {}

  findAll() {
    return this.titles;
  }
}
