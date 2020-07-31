require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

// Configuring Environment
module.exports = {
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
};
