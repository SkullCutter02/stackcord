import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";

import { QuestionService } from "./question.service";
import { JwtAuthGuard } from "../auth/guards/jwt.guard";
import { ReqWithUser } from "../types/reqWithUser.interface";
import { CreateQuestionDto } from "./dto/createQuestion.dto";

@Controller("question")
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  createQuestion(@Req() req: ReqWithUser, @Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.createQuestion(req.user, createQuestionDto);
  }
}
