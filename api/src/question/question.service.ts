import { Inject, Injectable } from "@nestjs/common";

import { Question } from "./models/question.model";
import { User } from "../user/models/user.model";
import { CreateQuestionDto } from "./dto/createQuestion.dto";
import { PatchQuestionDto } from "./dto/patchQuestion.dto";

@Injectable()
export class QuestionService {
  constructor(@Inject(Question) private readonly questionModel: typeof Question) {}

  public async getQuestion(questionId: string) {
    return this.questionModel.query().findById(questionId).withGraphJoined("[hall, user, answers.user]");
  }

  public async getUserQuestions(user: User) {
    return this.questionModel.query().where("user_id", user.id).withGraphJoined("[hall]");
  }

  public async createQuestion(user: User, { title, body, whiteboard, hallId }: CreateQuestionDto) {
    const question = await this.questionModel.query().insert({ title, body, whiteboard });
    await question.$relatedQuery("hall").relate(hallId);
    await question.$relatedQuery("user").relate(user.id);
    return this.getQuestion(question.id);
  }

  public async editQuestion(questionId: string, { title, body, whiteboard, answered }: PatchQuestionDto) {
    return this.questionModel.query().patchAndFetchById(questionId, { title, body, whiteboard, answered });
  }

  public async deleteQuestion(questionId: string) {
    await this.questionModel.query().deleteById(questionId);
    return { message: "Question deleted" };
  }

  public async isUserOwnerOfQuestion(questionId: string, userId: string) {
    const question = await this.getQuestion(questionId);
    return question.user.id === userId;
  }
}
