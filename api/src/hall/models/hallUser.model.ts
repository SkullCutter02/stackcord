import Objection, { Model, RelationMappings } from "objection";
import { User } from "../../user/models/user.model";
import { Hall } from "./hall.model";

export class HallUser extends Model {
  static tableName = "halls_users";

  static idColumn = ["hall_id", "user_id"];

  role: "teacher" | "student";
  hallId: string;
  userId: string;

  user: User;
  hall: Hall;

  $formatJson(jsonRaw: Objection.Pojo): Objection.Pojo {
    const json = super.$formatJson(jsonRaw);
    return { ...json, hallId: undefined, userId: undefined };
  }

  static relationMappings: RelationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: "halls_users.user_id",
        to: "users.id",
      },
    },
    hall: {
      relation: Model.BelongsToOneRelation,
      modelClass: Hall,
      join: {
        from: "halls_users.hall_id",
        to: "halls.id",
      },
    },
  };
}
