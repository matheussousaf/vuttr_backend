import { Router } from "express";
import { HealthController } from "@controllers/HealthController";
import tool from './tool'; 

const routes = Router();

routes.get("/", HealthController.healthCheck);
routes.use("/tool", tool);

export default routes;
