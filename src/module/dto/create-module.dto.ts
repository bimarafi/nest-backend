import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsString, MaxLength } from 'class-validator';
export class CreateModuleDto {
  @ApiProperty()
  @IsAlpha()
  @MaxLength(250)
  name: string;

  @ApiProperty()
  @IsString()
  @MaxLength(250)
  label: string;
}
