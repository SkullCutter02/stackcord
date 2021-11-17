import { Inject, Injectable } from "@nestjs/common";
import { Socket } from "socket.io";
import { parse } from "cookie";
import { WsException } from "@nestjs/websockets";

import { AuthService } from "../auth/auth.service";
import { User } from "../user/models/user.model";
import { CreateAnswerDto } from "./dto/createAnswer.dto";
import { Answer } from "./models/answer.model";
import { PatchAnswerDto } from "./dto/patchAnswer.dto";

@Injectable()
export class AnswerService {
  constructor(
    @Inject(Answer) private readonly answerModel: typeof Answer,
    private readonly authService: AuthService
  ) {}

  public async getAnswer(answerId: string) {
    return this.answerModel.query().findById(answerId).withGraphJoined("[question, user]");
  }

  public async createAnswer(user: User, { body, whiteboard, questionId }: CreateAnswerDto) {
    const answer = await this.answerModel.query().insert({ body, whiteboard });
    await answer.$relatedQuery("question").relate(questionId);
    await answer.$relatedQuery("user").relate(user.id);
    return this.getAnswer(answer.id);
  }

  public async editAnswer(answerId: string, { body, whiteboard }: PatchAnswerDto) {
    return this.answerModel.query().patchAndFetchById(answerId, { body, whiteboard });
  }

  public async deleteAnswer(answerId: string) {
    await this.answerModel.query().deleteById(answerId);
    return { message: "Answer deleted" };
  }

  public async isUserOwnerOfAnswer(answerId: string, userId: string) {
    const answer = await this.getAnswer(answerId);
    return answer.user.id === userId;
  }

  public async getUserFromSocket(socket: Socket) {
    const cookie = socket.handshake.headers.cookie;
    const cookies = parse(cookie);
    const accessToken = cookies["access-token"];
    const user = await this.authService.getUserFromAccessToken(accessToken);

    if (!user) {
      throw new WsException("Invalid credentials.");
    }

    return user;
  }
}
