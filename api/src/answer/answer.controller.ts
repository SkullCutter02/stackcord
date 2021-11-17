import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Req, UseGuards } from "@nestjs/common";

import { JwtAuthGuard } from "../auth/guards/jwt.guard";
import { ReqWithUser } from "../types/reqWithUser.interface";
import { AnswerService } from "./answer.service";
import { CreateAnswerDto } from "./dto/createAnswer.dto";
import { IsUserOwnerOfAnswerGuard } from "./guards/isUserOwnerOfAnswer.guard";
import { PatchAnswerDto } from "./dto/patchAnswer.dto";

@Controller("answer")
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Get("/:id")
  getAnswer(@Param("id", ParseUUIDPipe) answerId: string) {
    return this.answerService.getAnswer(answerId);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createAnswer(@Req() req: ReqWithUser, @Body() createAnswerDto: CreateAnswerDto) {
    return this.answerService.createAnswer(req.user, createAnswerDto);
  }

  @Patch("/:id")
  @UseGuards(JwtAuthGuard, IsUserOwnerOfAnswerGuard)
  editAnswer(@Param("id", ParseUUIDPipe) answerId: string, @Body() patchAnswerDto: PatchAnswerDto) {
    return this.answerService.editAnswer(answerId, patchAnswerDto);
  }
}
