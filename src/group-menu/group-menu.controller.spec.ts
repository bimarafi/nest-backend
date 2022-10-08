import { Test, TestingModule } from '@nestjs/testing';
import { GroupMenuController } from './group-menu.controller';
import { GroupMenuService } from './group-menu.service';

describe('GroupMenuController', () => {
  let controller: GroupMenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupMenuController],
      providers: [GroupMenuService],
    }).compile();

    controller = module.get<GroupMenuController>(GroupMenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
