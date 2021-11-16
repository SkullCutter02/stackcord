import { IsOptional, IsString, IsUUID, MaxLength } from "class-validator";

export class CreateQuestionDto {
  @IsString()
  @MaxLength(300)
  title: string;

  @IsString()
  @MaxLength(20000)
  body: string;

  @IsString()
  @IsOptional()
  whiteboard: string;

  @IsUUID()
  hallId: string;
}
