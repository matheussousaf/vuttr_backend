import { Router } from "express";
import { ToolController } from "@controllers/ToolController";

/**
 * These are the enpoints for Tools.
 *
 *  Features:
 * - GET: List all Tools
 * - GET: Get a Tool
 * - POST: Create a Tool
 * - PUT:  Edit a Tool
 * - DELETE: Delete a Tool
 *
 *  JWT Authentication - All endpoints have support to JWT Authentication, to
 *  set the endpoint as an authenticated endpoint you have to first connect the middleware:
 *
 *  Ex.: routes.get("/", checkJwt, ToolController.list);
 */

const routes = Router();

// List all Tools
routes.get("/", ToolController.list);

// Get a Tool
routes.get("/:id", ToolController.index);

// Create a Tool
routes.post("/", ToolController.create);

// Edit a Tool
routes.put("/:id", ToolController.edit);

// Delete a Tool
routes.delete("/:id", ToolController.delete);

export default routes;
