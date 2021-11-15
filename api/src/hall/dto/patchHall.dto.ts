import { IsBoolean } from "class-validator";

export class PatchHallDto {
  @IsBoolean()
  anonymous: boolean = false;
}
