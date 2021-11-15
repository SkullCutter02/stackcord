import { IsBoolean } from "class-validator";

export class CreateHallDto {
  @IsBoolean()
  anonymous: boolean = false;
}
