import { IsString, MaxLength, IsOptional, IsBoolean } from "class-validator";

export class PatchQuestionDto {
  @IsString()
  @MaxLength(300)
  title: string;

  @IsString()
  @MaxLength(20000)
  body: string;

  @IsString()
  @IsOptional()
  whiteboard: string;

  @IsBoolean()
  answered: boolean;
}
