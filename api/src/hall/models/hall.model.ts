import { JSONSchema, Model, RelationMappings } from "objection";

import { BaseModel } from "../../database/base.model";
import { User } from "../../user/models/user.model";

export class Hall extends BaseModel {
  static tableName = "halls";

  code: string;
  anonymous: boolean = false;

  static jsonSchema: JSONSchema = {
    type: "object",
    required: ["code", "anonymous"],
    properties: {
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
          to: "halls_users.user_id",
          extra: ["role"],
        },
        to: "users.id",
      },
    },
  };
}
