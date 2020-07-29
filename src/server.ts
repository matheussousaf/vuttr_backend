import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import routes from "@routes/index";
import { connection } from "./db";

const isTest = process.env.NODE_ENV === "test";

const app = express();

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
    }
  });
});

export default app;
