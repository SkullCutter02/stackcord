import { Inject, Injectable } from "@nestjs/common";

import { User } from "../user/models/user.model";
import { CreateAnswerDto } from "./dto/createAnswer.dto";
import { Answer } from "./models/answer.model";

@Injectable()
export class AnswerService {
  constructor(@Inject(Answer) private readonly answerModel: typeof Answer) {}

  async getAnswer(answerId: string) {
    return this.answerModel.query().findById(answerId).withGraphJoined("[question, user]");
  }

  async createAnswer(user: User, { body, whiteboard, questionId }: CreateAnswerDto) {
    const answer = await this.answerModel.query().insert({ body, whiteboard });
    await answer.$relatedQuery("question").relate(questionId);
    await answer.$relatedQuery("user").relate(user.id);
    return this.getAnswer(answer.id);
  }
}
