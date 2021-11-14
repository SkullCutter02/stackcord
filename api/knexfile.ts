import { knexSnakeCaseMappers } from "objection";
import Knex from "knex";
import { config } from "dotenv";

config();

const knexConfig: Knex.Config = {
  client: "postgresql",
  useNullAsDefault: true,
  connection: {
    host: process.env.PG_HOST,
    port: +process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
  },
  migrations: {
    tableName: "migrations",
    directory: __dirname + "/src/database/migrations",
  },
  seeds: {
    directory: __dirname + "/src/database/seeds",
  },
  ...knexSnakeCaseMappers(),
};

export default knexConfig;
