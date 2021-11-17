import { IsOptional, IsString, MaxLength } from "class-validator";

export class PatchAnswerDto {
  @IsString()
  @MaxLength(10000)
  body: string;

  @IsString()
  @IsOptional()
  whiteboard?: string;
}
