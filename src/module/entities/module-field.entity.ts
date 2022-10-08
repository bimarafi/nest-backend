import { BaseEntity } from 'src/config/base.entity';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Module } from './module.entity';

@Entity({ name: 'ms_module_field' })
export class ModuleField extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'pk_module_field_id' })
  id: number;
  module: Module;
  name: string;
  label: string;
  sequence: number;
  required: boolean;
  isPrimaryKey: boolean;
  isUnik: boolean;
  isShowInView: boolean;
  isShowInForm: boolean;
  defaultValue: string;
  //fieldType
  sizeField: number;
  //componentType
  tableReferenceName: string;
  tableReferenceAlias: string;
  tableReferenceFieldKey: string;
  tableReferenceFieldDisplayName: string;
  tableReferenceFilter: string;
  isUseRegexValidation: boolean;
  // tableReferenceAdditionalJoin:string
  // bCascade:boolean
  // fieldNameParent:string
  // filterCascade:string
}
