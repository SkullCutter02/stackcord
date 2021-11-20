import { ForbiddenException, Inject, Injectable } from "@nestjs/common";

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
    return this.hallModel
      .query()
      .findById(hallId)
      .withGraphFetched("[users]")
      .withGraphJoined("[questions.[user, answers]]");
  }

  public async getUserHalls(userId: string) {
    return this.hallModel.query().withGraphJoined("users").where("users.id", userId);
  }

  public async createHall({ name, anonymous }: CreateHallDto, user: User) {
    const code = generateAlphanumericString();

    const hall = await this.hallModel.query().insert({ name, code, anonymous });
    await this.hallUserModel.query().insert({ role: "teacher", hallId: hall.id, userId: user.id });
    return this.getHall(hall.id);
  }

  public async joinHall(code: string, user: User) {
    const hall = await this.hallModel.query().findOne({ code });
    await this.isUserInHall(hall.id, user.id);
    await this.hallUserModel.query().insert({ role: "student", hallId: hall.id, userId: user.id });
    return this.getHall(hall.id);
  }

  public async editHall(hallId: string, user: User, { name, anonymous }: PatchHallDto) {
    return this.hallModel.query().patchAndFetchById(hallId, { name, anonymous });
  }

  public async makeUserTeacher(hallId: string, user: User, { userId: targetUserId }: MakeUserTeacherDto) {
    await this.hallUserModel.query().where({ hallId: hallId, userId: targetUserId }).patch({ role: "teacher" });
    return this.getHall(hallId);
  }

  public async deleteHall(hallId: string, user: User) {
    await this.hallUserModel.query().where({ hallId }).delete();
    await this.hallModel.query().deleteById(hallId);

    return { message: "Hall deleted" };
  }

  public async isUserInHall(hallId: string, userId: string) {
    const hall = await this.getHall(hallId);
    const isUserInHall = hall.users.some((hallUser) => hallUser.id === userId);

    if (isUserInHall) throw new ForbiddenException("User is already in hall");
    return true;
  }

  public async isTeacherInHall(hallId: string, userId: string) {
    const hall = await this.getHall(hallId);

    const isTeacherInHall = hall.users.some(
      (hallUser: User & { role: string }) => hallUser.id === userId && hallUser.role === "teacher"
    );

    if (!isTeacherInHall) throw new ForbiddenException("User is not a teacher in this hall");

    return true;
  }
}
