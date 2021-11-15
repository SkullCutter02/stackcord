import { Inject, Injectable } from "@nestjs/common";

import { CreateHallDto } from "./dto/createHall.dto";
import { User } from "../user/models/user.model";
import { generateAlphanumericString } from "../utils/generateAlphanumericString";
import { Hall } from "./models/hall.model";
import { HallUser } from "./models/hallUser.model";

@Injectable()
export class HallService {
  constructor(
    @Inject(Hall) private readonly hallModel: typeof Hall,
    @Inject(HallUser) private readonly hallUserModel: typeof HallUser
  ) {}

  async createHall({ anonymous }: CreateHallDto, user: User) {
    const code = generateAlphanumericString();

    const hall = await this.hallModel.query().insert({ code, anonymous });
    await this.hallUserModel.query().insert({ role: "teacher", hallId: hall.id, userId: user.id });
    return this.hallUserModel
      .query()
      .findOne({ hallId: hall.id, userId: user.id })
      .withGraphJoined("[hall, user]");
  }
}
