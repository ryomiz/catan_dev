import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GraphQLModule} from "@nestjs/graphql";
import { join } from 'path'
import { TitlesModule } from './titles/titles.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      sortSchema: true
    }),
    TitlesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
