import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import routes from "@routes/index";

const isTest = process.env.NODE_ENV === "test";

// Configuring Environment
require("dotenv").config({
  path: isTest ? ".env.testing" : ".env",
});

const app = express();

interface Connection {
  create: (callback?: Function) => Promise<void>;
}

export const connection: Connection = {
  create: async (callback: Function = () => {}) => {
    await createConnection();
    callback();
  },
};

connection.create(() => {
  const PORT = process.env.PORT;

  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use("/", routes);

  app.listen(PORT, () => {
    if (!isTest) {
      console.log(`🚀 Server started on port ${PORT}`);
    };
  });
});

export default app;
