import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../users/user';
import { Title } from '../titles/title';

@ObjectType()
export class Game {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  titleId: number;

  @Field((type) => [Number])
  userIds: number[];
}
