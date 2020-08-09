require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

import mysql, { MysqlError } from "mysql";

export const createDb = (environment: string = "other") => {
  const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    multipleStatements: false,
  });

  const DATABASE =
    environment === "test" ? process.env.DATABASE : process.env.TEST_DATABASE;

  const sql = `CREATE DATABASE IF NOT EXISTS ${DATABASE};`;

  return new Promise((resolve, reject) => {
    connection.connect((error: MysqlError) => {
      if (error) throw error;
      connection.query(sql, (createDatabaseError: MysqlError) => {
        if (createDatabaseError) throw createDatabaseError;
        console.log("✨ Created database successfully!");
        connection.destroy();
        resolve();
      });
    });
  });
};

createDb();
