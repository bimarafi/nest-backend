import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupMenuService } from './group-menu.service';
import { CreateGroupMenuDto } from './dto/create-group-menu.dto';
import { UpdateGroupMenuDto } from './dto/update-group-menu.dto';

@Controller('group-menu')
export class GroupMenuController {
  constructor(private readonly groupMenuService: GroupMenuService) {}

  @Post()
  create(@Body() createGroupMenuDto: CreateGroupMenuDto) {
    return this.groupMenuService.create(createGroupMenuDto);
  }

  @Get()
  findAll() {
    return this.groupMenuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupMenuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupMenuDto: UpdateGroupMenuDto) {
    return this.groupMenuService.update(+id, updateGroupMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupMenuService.remove(+id);
  }
}
