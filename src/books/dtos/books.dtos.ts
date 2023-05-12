import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(250)
  @MinLength(3)
  @ApiProperty({
    description: "Book's name",
  })
  readonly name: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    description:
      'This field validates if the record is shown as active or inactive',
  })
  readonly active: boolean;
}
export class UpdateBookDto extends PartialType(CreateBookDto) {}
