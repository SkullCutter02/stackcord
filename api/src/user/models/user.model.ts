import Objection, { JSONSchema, Model, RelationMappings } from "objection";

import { SoftDeleteModel } from "../../database/softDelete.model";
import { Hall } from "../../hall/models/hall.model";

export class User extends SoftDeleteModel {
  static tableName = "users";

  name: string;
  email: string;
  hash: string;
  currentHashedRefreshToken?: string;

  $formatJson(jsonRaw: Objection.Pojo): Objection.Pojo {
    const json = super.$formatJson(jsonRaw);
    return { ...json, hash: undefined, currentHashedRefreshToken: undefined };
  }

  static jsonSchema: JSONSchema = {
    type: "object",
    required: ["name", "email", "hash"],
    properties: {
      name: { type: "string" },
      email: { type: "string", format: "email" },
      hash: { type: "string" },
    },
  };

  static relationMappings: RelationMappings = {
    halls: {
      relation: Model.ManyToManyRelation,
      modelClass: Hall,
      join: {
        from: "users.id",
        through: {
          from: "halls_users.user_id",
          to: "halls_users.hall_id",
          extra: ["role"],
        },
        to: "halls.id",
      },
    },
  };
}
