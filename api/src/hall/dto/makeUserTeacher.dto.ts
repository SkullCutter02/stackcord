import { IsUUID } from "class-validator";

export class MakeUserTeacherDto {
  @IsUUID()
  userId: string;
}
