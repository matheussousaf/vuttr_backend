module.exports = {
  type: "mysql",
  port: process.env.PORT,
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
};