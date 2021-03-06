require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

// Configuring Environment (based on the NODE_ENV)
module.exports = {
  name: "default",
  type: "mysql",
  port: process.env.DB_PORT,
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: false,
  entities: [process.env.ENTITIES_FOLDER],
  migrations: [process.env.MIGRATIONS_FOLDER],
  cli: {
    migrationsDir: "src/migrations",
    entitiesDir: "src/entities",
  },
};
