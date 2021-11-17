import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";

import { JwtAuthGuard } from "../auth/guards/jwt.guard";
import { ReqWithUser } from "../types/reqWithUser.interface";
import { AnswerService } from "./answer.service";
import { CreateAnswerDto } from "./dto/createAnswer.dto";

@Controller("answer")
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  createAnswer(@Req() req: ReqWithUser, @Body() createAnswerDto: CreateAnswerDto) {
    return this.answerService.createAnswer(req.user, createAnswerDto);
  }
}
