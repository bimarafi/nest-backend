import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ModuleService } from './module.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';

@Controller('module')
export class ModuleController {
  constructor(private moduleService: ModuleService) {}

  @Post()
  async create(@Body() createModuleDto: CreateModuleDto) {
    return await this.moduleService.create(createModuleDto);
  }

  @Get()
  async findAll() {
    return this.moduleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.moduleService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateModuleDto: UpdateModuleDto,
  ) {
    return this.moduleService.update(+id, updateModuleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.moduleService.remove(+id);
  }
}
