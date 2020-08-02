import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [PrismaModule, HeroesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
