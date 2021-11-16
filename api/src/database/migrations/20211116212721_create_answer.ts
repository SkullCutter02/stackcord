import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("answers", (table) => {
    table.string("id").primary();
    table.timestamp("created_at").notNullable();
    table.timestamp("updated_at").notNullable();
    table.string("body").notNullable();
    table.string("whiteboard");
    table.string("question_id").references("questions.id").onDelete("cascade");
    table.string("user_id").references("users.id");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("answers");
}
