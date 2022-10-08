import { Module } from '@nestjs/common';
import { GroupMenuService } from './group-menu.service';
import { GroupMenuController } from './group-menu.controller';

@Module({
  controllers: [GroupMenuController],
  providers: [GroupMenuService]
})
export class GroupMenuModule {}
