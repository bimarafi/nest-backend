import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { Module } from './entities/module.entity';

@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(Module)
    private modulesRepository: Repository<Module>,
  ) {}

  async create(createModuleDto: CreateModuleDto): Promise<Module> {
    const newData = new Module();
    newData.name = createModuleDto.name;
    newData.label = createModuleDto.label;

    return this.modulesRepository.save(newData);
  }

  async findAll(): Promise<Module[]> {
    return await this.modulesRepository.find();
  }

  async findOne(id: number): Promise<Module> {
    try {
      const module = await this.modulesRepository.findOneOrFail({
        where: { id },
      }); // SELECT * FROM users WHERE users.id = userId
      return module;
    } catch (error) {
      // handle error
      throw error;
    }
  }

  async update(id: number, updateModuleDto: UpdateModuleDto): Promise<Module> {
    const module = await this.findOne(id);
    module.name = updateModuleDto.name;
    module.label = updateModuleDto.label;

    return this.modulesRepository.save(module);
  }

  async remove(id: number): Promise<Module> {
    const module = await this.findOne(id);

    return this.modulesRepository.remove(module);
  }
}
