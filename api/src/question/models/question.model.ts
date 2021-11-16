import Objection, { JSONSchema, Model, RelationMappings } from "objection";

import { BaseModel } from "../../database/base.model";
import { Hall } from "../../hall/models/hall.model";
import { User } from "../../user/models/user.model";

export class Question extends BaseModel {
  static tableName = "questions";

  title: string;
  body: string;
  whiteboard?: string;
  answered: boolean = false;

  hall: Hall;

  $formatJson(jsonRaw: Objection.Pojo): Objection.Pojo {
    const json = super.$formatJson(jsonRaw);
    return { ...json, hallId: undefined, userId: undefined };
  }

  static jsonSchema: JSONSchema = {
    type: "object",
    required: ["title", "body", "answered"],
    properties: {
      title: { type: "string", maxLength: 300 },
      body: { type: "string", maxLength: 20000 },
      answered: { type: "boolean", default: false },
    },
  };

  static relationMappings: RelationMappings = {
    hall: {
      relation: Model.BelongsToOneRelation,
      modelClass: Hall,
      join: {
        from: "questions.hall_id",
        to: "halls.id",
      },
    },
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: "questions.user_id",
        to: "users.id",
      },
    },
  };
}
