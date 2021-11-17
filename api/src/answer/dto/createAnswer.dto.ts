import { IsOptional, IsString, IsUUID, MaxLength } from "class-validator";

export class CreateAnswerDto {
  @IsString()
  @MaxLength(10000)
  body: string;

  @IsString()
  @IsOptional()
  whiteboard?: string;

  @IsUUID()
  questionId: string;
}
