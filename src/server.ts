require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import routes from "@routes/index";
import { db } from "./db";

const isTest = process.env.NODE_ENV === "test";

const PORT = process.env.PORT || 3000;

const app = express();

const createServer = () => {
  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use("/", routes);

  if (!isTest) {
    app.listen(PORT, () => {
      console.log(`🚀 Server started on port ${PORT}`);
    });
  }
};

db.create(); // Db Connection

createServer();

export default app;
