import { Module } from "@nestjs/common";
import { ObjectionModule } from "@willsoto/nestjs-objection";

import { AnswerController } from "./answer.controller";
import { AnswerService } from "./answer.service";
import { Answer } from "./models/answer.model";

@Module({
  imports: [ObjectionModule.forFeature([Answer])],
  controllers: [AnswerController],
  providers: [AnswerService],
})
export class AnswerModule {}
