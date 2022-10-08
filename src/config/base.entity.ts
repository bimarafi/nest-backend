import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {
  @Column({
    type: 'boolean',
    name: 'is_active',
    nullable: false,
    default: true,
  })
  active?: boolean;

  @Column({
    type: 'varchar',
    length: 50,
    name: 'created_by',
    nullable: false,
    default: '',
  })
  createdBy?: string;

  @Column({
    type: 'varchar',
    length: 50,
    name: 'last_updated_by',
    nullable: false,
    default: '',
  })
  lastUpdatedBy?: string;

  @Column({
    type: 'varchar',
    length: 50,
    name: 'approved_by',
    nullable: false,
    default: '',
  })
  approvedBy?: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_date',
    nullable: false,
    default: 'now()',
  })
  createdDate?: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'last_updated_date',
    nullable: true,
  })
  lastUpdatedDate?: Date;

  @Column({ type: 'timestamp', name: 'approved_date', nullable: true })
  approvedDate?: Date;
}
