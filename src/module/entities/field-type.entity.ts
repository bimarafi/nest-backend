import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ms_field_type' })
export class FieldType {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'pk_field_type_id' })
  id: number;
  caption: string;
  description: string;
  sqlName: string;
  codeName: string;
  codeEffectType: string;
  // codeEffectCodeType:string
}
