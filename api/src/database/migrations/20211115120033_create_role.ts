import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("halls", (table) => {
      table.string("id").primary();
      table.timestamp("created_at").notNullable();
      table.timestamp("updated_at").notNullable();
      table.string("code").unique().notNullable();
      table.boolean("anonymous").notNullable().defaultTo(false);
    })
    .createTable("halls_users", (table) => {
      table.string("hall_id").references("halls.id");
      table.string("user_id").references("users.id");
      table.enum("role", ["student", "teacher"]).notNullable().defaultTo("student");
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("halls_users").dropTable("halls");
}
