import { Module } from '@nestjs/common';
import { ModuleService } from './module.service';
import { ModuleController } from './module.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module as module } from './entities/module.entity';

@Module({
  imports: [TypeOrmModule.forFeature([module])],
  controllers: [ModuleController],
  providers: [ModuleService],
  exports: [],
})
export class ModuleModule {}
