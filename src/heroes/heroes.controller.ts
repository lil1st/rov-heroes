import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { HeroDto } from './dto/heroes.dto';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly service: PrismaService) {}

  @Post()
  createHero(
    @Body() { name, role, position, level }: HeroDto,
  ): Promise<HeroDto> {
    return this.service.hero.create({
      data: {
        name,
        role,
        position,
        level,
      },
    });
  }

  @Get()
  async findAllHeroes() {
    const response = await this.service.hero.findMany();
    const res = {
      status: 'success',
      data: response,
    };
    return res;
  }

  @Get('/:id')
  findHeroById(@Param('id') id: number): Promise<HeroDto> {
    return this.service.hero.findOne({
      where: {
        id: Number(id),
      },
    });
  }

  @Patch('/:id/updateLevel')
  updateLevel(
    @Param('id') id: number,
    @Body('level') level: number,
  ): Promise<HeroDto> {
    return this.service.hero.update({
      where: {
        id: Number(id),
      },
      data: {
        level: level,
      },
    });
  }

  @Delete('/:id')
  deleteHero(@Param('id') id: number): Promise<HeroDto> {
    return this.service.hero.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
