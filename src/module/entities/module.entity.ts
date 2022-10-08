import { BaseEntity } from 'src/config/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'module' })
export class Module extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'pk_module_id' })
  id?: number;

  @Column({
    type: 'varchar',
    length: 250,
    name: 'module_name',
    nullable: false,
    default: '',
    unique: true,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 250,
    name: 'module_label',
    nullable: false,
    default: '',
  })
  label: string;

  @Column({
    type: 'varchar',
    length: 250,
    name: 'module_description',
    nullable: false,
    default: '',
  })
  description?: string;

  @Column({
    type: 'boolean',
    name: 'is_use_designer',
    nullable: false,
    default: false,
  })
  isUseDesigner?: boolean;

  @Column({
    type: 'boolean',
    name: 'is_use_approval',
    nullable: false,
    default: false,
  })
  isUseApproval?: boolean;

  @Column({
    type: 'boolean',
    name: 'is_support_add',
    nullable: false,
    default: false,
  })
  isSupportAdd?: boolean;

  @Column({
    type: 'boolean',
    name: 'is_support_edit',
    nullable: false,
    default: false,
  })
  isSupportEdit?: boolean;

  @Column({
    type: 'boolean',
    name: 'is_support_delete',
    nullable: false,
    default: false,
  })
  isSupportDelete?: boolean;

  @Column({
    type: 'boolean',
    name: 'is_support_activation',
    nullable: false,
    default: false,
  })
  isSupportActivation?: boolean;

  @Column({
    type: 'boolean',
    name: 'is_support_view',
    nullable: false,
    default: false,
  })
  isSupportView?: boolean;

  @Column({
    type: 'boolean',
    name: 'is_support_upload',
    nullable: false,
    default: false,
  })
  isSupportUpload?: boolean;

  @Column({
    type: 'boolean',
    name: 'is_support_detail',
    nullable: false,
    default: false,
  })
  isSupportDetail?: boolean;

  @Column({
    type: 'varchar',
    length: 250,
    name: 'url_add',
    nullable: false,
    default: '',
  })
  urlAdd?: string;

  @Column({
    type: 'varchar',
    length: 250,
    name: 'url_edit',
    nullable: false,
    default: '',
  })
  urlEdit?: string;

  @Column({
    type: 'varchar',
    length: 250,
    name: 'url_delete',
    nullable: false,
    default: '',
  })
  urlDelete?: string;

  @Column({
    type: 'varchar',
    length: 250,
    name: 'url_activation',
    nullable: false,
    default: '',
  })
  urlActivation?: string;

  @Column({
    type: 'varchar',
    length: 250,
    name: 'url_view',
    nullable: false,
    default: '',
  })
  urlView?: string;

  @Column({
    type: 'varchar',
    length: 250,
    name: 'url_upload',
    nullable: false,
    default: '',
  })
  urlUpload?: string;

  @Column({
    type: 'varchar',
    length: 250,
    name: 'url_approval',
    nullable: false,
    default: '',
  })
  urlApproval?: string;

  @Column({
    type: 'varchar',
    length: 250,
    name: 'url_approval_detail',
    nullable: false,
    default: '',
  })
  urlApprovalDetail?: string;

  @Column({
    type: 'varchar',
    length: 250,
    name: 'url_detail',
    nullable: false,
    default: '',
  })
  urlDetail?: string;

  @Column({
    type: 'boolean',
    name: 'is_use_store_procedire_validation',
    nullable: false,
    default: false,
  })
  isUseStoreProcedureValidation?: boolean;
}
