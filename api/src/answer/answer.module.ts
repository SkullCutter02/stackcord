import { Module } from "@nestjs/common";
import { ObjectionModule } from "@willsoto/nestjs-objection";

import { AnswerController } from "./answer.controller";
import { AnswerService } from "./answer.service";
import { Answer } from "./models/answer.model";
import { AnswerGateway } from "./answer.gateway";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [ObjectionModule.forFeature([Answer]), AuthModule],
  controllers: [AnswerController],
  providers: [AnswerService, AnswerGateway],
})
export class AnswerModule {}
