import Objection, { JSONSchema, Model, RelationMappings } from "objection";

import { BaseModel } from "../../database/base.model";
import { Question } from "../../question/models/question.model";
import { User } from "../../user/models/user.model";

export class Answer extends BaseModel {
  static tableName = "answers";

  body: string;
  whiteboard?: string;

  question: Question;
  user: User;

  $formatJson(jsonRaw: Objection.Pojo): Objection.Pojo {
    const json = super.$formatJson(jsonRaw);
    return { ...json, questionId: undefined, userId: undefined };
  }

  static jsonSchema: JSONSchema = {
    type: "object",
    required: ["body"],
    properties: {
      body: { type: "string", maxLength: 10000 },
    },
  };

  static relationMappings: RelationMappings = {
    question: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/../../question/models/question.model",
      join: {
        from: "answers.question_id",
        to: "questions.id",
      },
    },
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/../../user/models/user.model",
      join: {
        from: "answers.user_id",
        to: "users.id",
      },
    },
  };
}
