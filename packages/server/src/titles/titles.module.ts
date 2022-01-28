import { Module } from '@nestjs/common';
import { TitlesResolver } from './titles.resolver';
import { TitlesService } from './titles.service';

@Module({
  providers: [TitlesResolver, TitlesService],
})
export class TitlesModule {}
