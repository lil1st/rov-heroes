import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [HeroesController],
  imports: [PrismaModule]
})
export class HeroesModule {}
