import { IsBoolean, IsString, MaxLength } from "class-validator";

export class CreateHallDto {
  @IsString()
  @MaxLength(20)
  name: string;

  @IsBoolean()
  anonymous: boolean = false;
}
