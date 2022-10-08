import { PartialType } from '@nestjs/swagger';
import { CreateGroupMenuDto } from './create-group-menu.dto';

export class UpdateGroupMenuDto extends PartialType(CreateGroupMenuDto) {}
