import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Title {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;
}
