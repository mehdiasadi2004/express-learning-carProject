import {
  IsDefined,
  IsEmail,
  IsOptional,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateCarDto {
  @MaxLength(100)
  @IsDefined()
  title: string;
  @MaxLength(40)
  @IsDefined()
  name: string;
  @IsDefined()
  desc: string;
  date: Date;
  @IsDefined()
  image: string;
}
