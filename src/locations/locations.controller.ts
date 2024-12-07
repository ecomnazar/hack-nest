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
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/CreateLocationDto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all locations' })
  getAll() {
    return this.locationsService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get location by id' })
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.locationsService.getById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create location' })
  @ApiBody({
    type: CreateLocationDto,
    examples: {
      example1: {
        value: {
          name: 'Name',
          description: 'Description',
          lat: 77.12,
          lng: 77.12,
        },
      },
    },
  })
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationsService.create(createLocationDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update location' })
  @ApiBody({
    type: CreateLocationDto,
    examples: {
      example1: {
        value: {
          name: 'Name',
          description: 'Description',
          lat: 77.12,
          lng: 77.12,
        },
      },
    },
  })
  updateLocation(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLocation: CreateLocationDto,
  ) {
    return this.locationsService.update(id, updateLocation);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete location' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.locationsService.delete(id);
  }
}
