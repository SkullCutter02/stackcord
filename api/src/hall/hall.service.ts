import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";

import { CreateHallDto } from "./dto/createHall.dto";
import { User } from "../user/models/user.model";
import { generateAlphanumericString } from "../utils/generateAlphanumericString";
import { Hall } from "./models/hall.model";
import { HallUser } from "./models/hallUser.model";
import { PatchHallDto } from "./dto/patchHall.dto";
import { MakeUserTeacherDto } from "./dto/makeUserTeacher.dto";

@Injectable()
export class HallService {
  constructor(
    @Inject(Hall) private readonly hallModel: typeof Hall,
    @Inject(HallUser) private readonly hallUserModel: typeof HallUser
  ) {}

  public async getHall(hallId: string) {
    return this.hallModel.query().findById(hallId).withGraphFetched("users");
  }

  public async getUserHalls(userId: string) {
    return this.hallUserModel
      .query()
      .where({ userId })
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

  public async joinHall(hallId: string, user: User) {
    await this.isUserInHall(hallId, user.id);
    await this.hallUserModel.query().insert({ role: "student", hallId, userId: user.id });
    return this.hallUserModel.query().findOne({ hallId, userId: user.id }).withGraphJoined("[hall, user]");
  }

  public async editHall(hallId: string, user: User, { anonymous }: PatchHallDto) {
    await this.isTeacherInHall(hallId, user.id);
    return this.hallModel.query().patchAndFetchById(hallId, { anonymous });
  }

  public async makeUserTeacher(hallId: string, user: User, { userId: targetUserId }: MakeUserTeacherDto) {
    await this.isTeacherInHall(hallId, user.id);

    await this.hallUserModel.query().where({ hallId: hallId, userId: targetUserId }).patch({ role: "teacher" });
    return this.getHall(hallId);
  }

  private async isUserInHall(hallId: string, userId: string) {
    const hall = await this.getHall(hallId);
    const isUserInHall = hall.users.some((hallUser) => hallUser.id === userId);

    if (isUserInHall) throw new UnauthorizedException("User is already in hall");
    return hall;
  }

  private async isTeacherInHall(hallId: string, userId: string) {
    const hall = await this.getHall(hallId);

    const isTeacherInHall = hall.users.some(
      (hallUser: User & { role: string }) => hallUser.id === userId && hallUser.role === "teacher"
    );

    if (!isTeacherInHall) throw new UnauthorizedException("User is not a teacher in this hall");

    return hall;
  }
}
