import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";

import { CreateHallDto } from "./dto/createHall.dto";
import { User } from "../user/models/user.model";
import { generateAlphanumericString } from "../utils/generateAlphanumericString";
import { Hall } from "./models/hall.model";
import { HallUser } from "./models/hallUser.model";
import { PatchHallDto } from "./dto/patchHall.dto";

@Injectable()
export class HallService {
  constructor(
    @Inject(Hall) private readonly hallModel: typeof Hall,
    @Inject(HallUser) private readonly hallUserModel: typeof HallUser
  ) {}

  public async getUserHalls(user: User) {
    return this.hallUserModel
      .query()
      .where({ userId: user.id })
      .innerJoin("halls", "halls.id", "=", "halls_users.hall_id")
      .select("*");
  }

  public async createHall({ anonymous }: CreateHallDto, user: User) {
    const code = generateAlphanumericString();

    const hall = await this.hallModel.query().insert({ code, anonymous });
    await this.hallUserModel.query().insert({ role: "teacher", hallId: hall.id, userId: user.id });
    return this.hallUserModel
      .query()
      .findOne({ hallId: hall.id, userId: user.id })
      .withGraphJoined("[hall, user]");
  }

  public async editHall(hallId: string, user: User, { anonymous }: PatchHallDto) {
    await this.isTeacherInHall(hallId, user.id);
    return this.hallModel.query().patchAndFetchById(hallId, { anonymous });
  }

  private async isTeacherInHall(hallId: string, userId: string) {
    const hall = await this.hallModel.query().findById(hallId).withGraphFetched("users");

    const isTeacherInHall = hall.users.some(
      (hallUser: User & { role: string }) => hallUser.id === userId && hallUser.role === "teacher"
    );

    if (!isTeacherInHall) throw new UnauthorizedException();

    return hall;
  }
}
