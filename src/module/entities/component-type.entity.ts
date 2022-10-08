import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ms_component_type' })
export class ComponentType {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'pk_field_type_id' })
  id: number;
  name: string;
  description: string;
}
