import { JSONSchema, Model, RelationMappings } from "objection";

import { BaseModel } from "../../database/base.model";
import { User } from "../../user/models/user.model";

export class Hall extends BaseModel {
  static tableName = "halls";

  name: string;
  code: string;
  anonymous: boolean = false;

  users: User[];

  static jsonSchema: JSONSchema = {
    type: "object",
    required: ["code", "anonymous"],
    properties: {
      name: { type: "string", maxLength: 20 },
      code: { type: "string" },
      anonymous: { type: "boolean", default: false },
    },
  };

  static relationMappings: RelationMappings = {
    users: {
      relation: Model.ManyToManyRelation,
      modelClass: User,
      join: {
        from: "halls.id",
        through: {
          from: "halls_users.hall_id",
          extra: ["role"],
          to: "halls_users.user_id",
        },
        to: "users.id",
      },
    },
  };
}
