import { Test, TestingModule } from '@nestjs/testing';
import { GroupMenuService } from './group-menu.service';

describe('GroupMenuService', () => {
  let service: GroupMenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupMenuService],
    }).compile();

    service = module.get<GroupMenuService>(GroupMenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
