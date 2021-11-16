import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("questions", (table) => {
    table.string("id").primary();
    table.timestamp("created_at").notNullable();
    table.timestamp("updated_at").notNullable();
    table.string("title").notNullable();
    table.string("body").notNullable();
    table.string("whiteboard");
    table.boolean("answered").defaultTo(false).notNullable();
    table.string("hall_id").references("halls.id").onDelete("cascade");
    table.string("user_id").references("users.id");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("questions");
}
