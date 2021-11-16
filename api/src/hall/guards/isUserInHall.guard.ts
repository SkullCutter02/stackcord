import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

import { HallService } from "../hall.service";
import { ReqWithUser } from "../../types/reqWithUser.interface";

@Injectable()
export class IsUserInHallGuard implements CanActivate {
  constructor(private readonly hallService: HallService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request: ReqWithUser = context.switchToHttp().getRequest();
    const hallId = request.params.id;
    return this.hallService.isUserInHall(hallId, request.user.id);
  }
}
