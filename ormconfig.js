// Configuring Environment
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = [
  {
    name: "default",
    type: "mysql",
    port: 3306,
    host: process.env.HOST,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    logging: false,
    entities: ["src/entities/*.ts", "dist/entities/*.js"],
    migrations: ["src/migrations/*.ts", "dist/migrations/*.js"],
    cli: {
      migrationsDir: "./src/migrations",
      entitiesDir: "./src/entities",
    },
  },
  {
    name: "test",
    type: "mysql",
    port: 3306,
    host: process.env.HOST,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    logging: false,
    dropSchema: false,
    entities: ["src/entities/*.ts", "dist/entities/*.js"],
    migrations: ["src/migrations/*.ts", "dist/migrations/*.js"],
    cli: {
      migrationsDir: "./src/migrations",
      entitiesDir: "./src/entities",
    },
  },
];
