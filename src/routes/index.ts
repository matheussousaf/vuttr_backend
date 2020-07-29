import { Router } from "express";
import { HealthController } from "@controllers/HealthController";
import tool from './tools'; 

const routes = Router();

routes.get("/", HealthController.healthCheck);
routes.use("/tools", tool);

export default routes;
