import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateNameDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
