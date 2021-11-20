import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .alterTable("questions", (table) => {
      table.text("title").alter();
      table.text("body").alter();
      table.text("whiteboard").alter();
    })
    .alterTable("answers", (table) => {
      table.text("body").alter();
      table.text("whiteboard").alter();
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .alterTable("questions", (table) => {
      table.string("title").alter();
      table.string("body").alter();
      table.string("whiteboard").alter();
    })
    .alterTable("answers", (table) => {
      table.string("body").alter();
      table.string("whiteboard").alter();
    });
}
