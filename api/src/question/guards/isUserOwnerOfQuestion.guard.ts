import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

import { ReqWithUser } from "../../types/reqWithUser.interface";
import { QuestionService } from "../question.service";

@Injectable()
export class IsUserOwnerOfQuestionGuard implements CanActivate {
  constructor(private readonly questionService: QuestionService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request: ReqWithUser = context.switchToHttp().getRequest();
    const questionId = request.params.id;
    return this.questionService.isUserOwnerOfQuestion(questionId, request.user.id);
  }
}
