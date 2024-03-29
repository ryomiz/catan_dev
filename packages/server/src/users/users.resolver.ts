import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query((returns) => [User])
  users() {
    return this.usersService.findAll();
  }
}
