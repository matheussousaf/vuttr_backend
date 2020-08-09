
import "reflect-metadata";
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import routes from "@routes/index";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const docs = YAML.load("./docs/swagger.yaml");

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/docs/", swaggerUi.serve, swaggerUi.setup(docs));
app.use("/", routes);

export default app;
