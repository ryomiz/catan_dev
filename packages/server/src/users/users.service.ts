import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Foo',
      role: 'user',
    },
    {
      id: 2,
      name: 'Bar',
      role: 'user',
    },
    {
      id: 3,
      name: 'Baz',
      role: 'user',
    },
  ];

  constructor() {}

  findAll() {
    return this.users;
  }
}
