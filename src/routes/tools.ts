import { Router } from "express";
import { ToolController } from "@controllers/ToolController";

const routes = Router();

routes.get("/", ToolController.list);
routes.get("/:id", ToolController.index);
routes.post("/", ToolController.create);
routes.put("/:id", ToolController.edit);
routes.delete("/:id", ToolController.delete);

export default routes;
