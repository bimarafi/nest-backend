import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { ModuleModule } from './module/module.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { GroupMenuModule } from './group-menu/group-menu.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ModuleModule,
    UserModule,
    RoleModule,
    GroupMenuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
