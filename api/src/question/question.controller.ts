import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Req, UseGuards } from "@nestjs/common";

import { QuestionService } from "./question.service";
import { JwtAuthGuard } from "../auth/guards/jwt.guard";
import { ReqWithUser } from "../types/reqWithUser.interface";
import { CreateQuestionDto } from "./dto/createQuestion.dto";

@Controller("question")
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get("/:id")
  getQuestion(@Param("id", ParseUUIDPipe) questionId: string) {
    return this.questionService.getQuestion(questionId);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createQuestion(@Req() req: ReqWithUser, @Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.createQuestion(req.user, createQuestionDto);
  }
}
