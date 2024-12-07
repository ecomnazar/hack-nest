import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TreeService } from './tree.service';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { CreateTreeDto } from './dto/CreateTree.dto';

@Controller('tree')
export class TreeController {
  constructor(private readonly treeService: TreeService) {}

  @Get()
  @ApiOperation({ summary: 'Get all trees' })
  getAll() {
    return this.treeService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get tree by id' })
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.treeService.getById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create tree' })
  @ApiBody({
    type: CreateTreeDto,
    examples: {
      example1: {
        value: {
          locationId: 0,
          nameId: 0,
          row: 0,
          column: 0,
          imgUrl: '',
          species: 'Тип дерева',
          age: 0,
          lastWatered: 'Дата последнего полива',
          wateringFreq: 'Частота полива (например, раз в 7 дней): number',
          pestResistance: 'Устойчивость к вредителям: true/false',
          diseaseResistance: 'Устойчивость к болезням: true/false',
          sunlight: 'Свет: number',
          temperature: 'Температура: number',
          humidity: 'Влажность: number',
          lastHarvest: 'Дата последнего урожая',
          harvestQty: 'Количество урожая: number',
          lastTreated: 'Дата последней обработки',
        },
      },
    },
  })
  create(@Body() createTreeDto: CreateTreeDto) {
    const data = {
      ...createTreeDto,
      location: { connect: { id: createTreeDto.locationId } }, // Connect location by ID
      name: { connect: { id: createTreeDto.nameId } }, // Connect name by ID
    };
    // Remove locationId and nameId since Prisma doesn't need them
    delete data.locationId;
    delete data.nameId;
    return this.treeService.create(data);
  }

  @Get('location/:locationId')
  @ApiOperation({ summary: 'Get all trees by location id' })
  getByLocationId(@Param('locationId', ParseIntPipe) locationId: number) {
    return this.treeService.getTreesByLocationId(locationId);
  }

  @Put('image/:id')
  @ApiOperation({ summary: 'Upload image by tree id' })
  @ApiBody({
    type: CreateTreeDto,
    examples: {
      example1: {
        value: {
          imgUrl: 'https://example.com/image.jpg',
        },
      },
    },
  })
  getImageUrl(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { imgUrl: string },
  ) {
    return this.treeService.addImageUrlByTreeId(id, body.imgUrl);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete tree' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.treeService.delete(id);
  }

  @Put('kill/:id')
  @ApiOperation({ summary: 'Kill tree' })
  killTree(@Param('id', ParseIntPipe) id: number) {
    return this.treeService.kill(id);
  }

  @Get('position/:locationId/:row/:column')
  @ApiOperation({ summary: 'Check is creating tree position available' })
  isPositionAvailable(
    @Param('locationId', ParseIntPipe) locationId: number,
    @Param('row', ParseIntPipe) row: number,
    @Param('column', ParseIntPipe) column: number,
  ) {
    return this.treeService.isPositionAvailable(locationId, row, column);
  }
}
