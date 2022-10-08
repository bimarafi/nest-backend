import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleModule } from './module/module.module';
import { ModuleModule } from './module/module.module';

@Module({
  imports: [ModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
