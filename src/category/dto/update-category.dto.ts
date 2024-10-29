import { IsString, MinLength, MaxLength, IsNumber } from 'class-validator';

export class UpdateCategoryDto {
  @IsString()
  @MinLength(3, { message: 'Username must be at least 3 characters long' })
  @MaxLength(50, { message: 'Username must be at most 20 characters long' })
  name: string;

  @IsNumber()
  productCount: number;

  @IsString()
  color: string;

  @IsString()
  image: string;
}
