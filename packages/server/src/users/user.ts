import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserRole } from '../types';

@ObjectType()
export class User {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  role: UserRole;
}
