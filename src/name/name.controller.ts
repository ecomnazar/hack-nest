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
import { NameService } from './name.service';
import { CreateNameDto } from './dto/CreateName.dto';
import { ApiOperation, ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Name')
@Controller('name')
export class NameController {
  constructor(private readonly nameService: NameService) {}

  @Get()
  @ApiOperation({ summary: 'Get all names' })
  getAll() {
    return this.nameService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get name by id' })
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.nameService.getNameById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create name' })
  @ApiBody({
    type: CreateNameDto,
    examples: {
      example1: {
        value: {
          name: 'Name',
          description: 'Description',
        },
      },
    },
  })
  createName(@Body() createNameDto: CreateNameDto) {
    return this.nameService.createName(createNameDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update name' })
  @ApiBody({
    type: CreateNameDto,
    examples: {
      example1: {
        value: {
          name: 'Name',
          description: 'Description',
        },
      },
    },
  })
  updateName(
    @Param('id', ParseIntPipe) id: number,
    @Body() createNameDto: CreateNameDto,
  ) {
    return this.nameService.updateName(id, createNameDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete name' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.nameService.deleteNameById(id);
  }
}
