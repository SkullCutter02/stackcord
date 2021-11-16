import { Module } from "@nestjs/common";
import { ObjectionModule } from "@willsoto/nestjs-objection";

import { QuestionController } from "./question.controller";
import { QuestionService } from "./question.service";
import { Question } from "./models/question.model";

@Module({
  imports: [ObjectionModule.forFeature([Question])],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
