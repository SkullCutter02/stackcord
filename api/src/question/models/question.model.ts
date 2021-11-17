import Objection, { JSONSchema, Model, RelationMappings } from "objection";

import { BaseModel } from "../../database/base.model";
import { Hall } from "../../hall/models/hall.model";
import { User } from "../../user/models/user.model";
import { Answer } from "../../answer/models/answer.model";

export class Question extends BaseModel {
  static tableName = "questions";

  title: string;
  body: string;
  whiteboard?: string;
  answered: boolean = false;

  hall: Hall;
  user: User;
  answers: Answer[];

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
      modelClass: __dirname + "/../../hall/models/hall.model",
      join: {
        from: "questions.hall_id",
        to: "halls.id",
      },
    },
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/../../user/models/user.model",
      join: {
        from: "questions.user_id",
        to: "users.id",
      },
    },
    answers: {
      relation: Model.HasManyRelation,
      modelClass: __dirname + "/../../answer/models/answer.model",
      join: {
        from: "questions.id",
        to: "answers.question_id",
      },
    },
  };
}
