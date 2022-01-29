import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TitlesModule } from './titles/titles.module';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), '../../schema.gql'),
      sortSchema: true,
    }),
    TitlesModule,
    UsersModule,
    GamesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
