import { Router } from "express";
import { ToolController } from "@controllers/ToolController";

const routes = Router();

// List all tools
routes.get("/", ToolController.list);

// Get a tool
routes.get("/:id", ToolController.index);

// Create a tool
routes.post("/", ToolController.create);

// Edit a tool
routes.put("/:id", ToolController.edit);

// Delete a tool
routes.delete("/:id", ToolController.delete);

export default routes;
