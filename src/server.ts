import "reflect-metadata";
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
import app from "./app";
import { db } from "./db";

const PORT = process.env.PORT || 3000;

const createServer = async () => {
  await db.create(); // Database Connection
  app.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}`);
  });
};

createServer();
