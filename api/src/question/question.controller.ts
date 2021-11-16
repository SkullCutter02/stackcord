import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Req, UseGuards } from "@nestjs/common";

import { QuestionService } from "./question.service";
import { JwtAuthGuard } from "../auth/guards/jwt.guard";
import { ReqWithUser } from "../types/reqWithUser.interface";
import { CreateQuestionDto } from "./dto/createQuestion.dto";
import { IsUserOwnerOfQuestionGuard } from "./guards/isUserOwnerOfQuestion.guard";
import { PatchQuestionDto } from "./dto/patchQuestion.dto";

@Controller("question")
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get("/:id")
  getQuestion(@Param("id", ParseUUIDPipe) questionId: string) {
    return this.questionService.getQuestion(questionId);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  getUserQuestions(@Req() req: ReqWithUser) {
    return this.questionService.getUserQuestions(req.user);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createQuestion(@Req() req: ReqWithUser, @Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.createQuestion(req.user, createQuestionDto);
  }

  @Patch("/:id")
  @UseGuards(JwtAuthGuard, IsUserOwnerOfQuestionGuard)
  editQuestion(@Param("id", ParseUUIDPipe) questionId: string, @Body() patchQuestionDto: PatchQuestionDto) {
    return this.questionService.editQuestion(questionId, patchQuestionDto);
  }

  @Delete("/:id")
  @UseGuards(JwtAuthGuard, IsUserOwnerOfQuestionGuard)
  deleteQuestion(@Param("id", ParseUUIDPipe) questionId: string) {
    return this.questionService.deleteQuestion(questionId);
  }
}
