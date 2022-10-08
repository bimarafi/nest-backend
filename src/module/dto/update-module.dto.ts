import { PartialType } from '@nestjs/mapped-types';
import { CreateModuleDto } from './create-module.dto';
import { IsAlpha, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Module } from '../entities/module.entity';

// export class UpdateModuleDto extends PartialType(CreateModuleDto) {
export class UpdateModuleDto {
  @ApiProperty()
  @IsAlpha()
  @MaxLength(250)
  name: string;

  @ApiProperty()
  @IsString()
  @MaxLength(250)
  label: string;
}
