import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

import { AnswerService } from "../answer.service";
import { ReqWithUser } from "../../types/reqWithUser.interface";

@Injectable()
export class IsUserOwnerOfAnswerGuard implements CanActivate {
  constructor(private readonly answerService: AnswerService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request: ReqWithUser = context.switchToHttp().getRequest();
    const answerId = request.params.id;
    return this.answerService.isUserOwnerOfAnswer(answerId, request.user.id);
  }
}
