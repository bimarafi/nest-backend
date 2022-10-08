import { Injectable } from '@nestjs/common';
import { CreateGroupMenuDto } from './dto/create-group-menu.dto';
import { UpdateGroupMenuDto } from './dto/update-group-menu.dto';

@Injectable()
export class GroupMenuService {
  create(createGroupMenuDto: CreateGroupMenuDto) {
    return 'This action adds a new groupMenu';
  }

  findAll() {
    return `This action returns all groupMenu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} groupMenu`;
  }

  update(id: number, updateGroupMenuDto: UpdateGroupMenuDto) {
    return `This action updates a #${id} groupMenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} groupMenu`;
  }
}
