import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Tool } from "@entities/Tool";

export class ToolController {
  static list = async (req: Request, res: Response) => {
    const toolRepository = getRepository(Tool);
    const tools = await toolRepository.find();

    console.log(tools);

    res.json(tools);
  };

  static create = async (req: Request, res: Response) => {
    const toolRepository = getRepository(Tool);

    const { title, link, description } = req.body;

    const newTool = new Tool();

    newTool.title = title;
    newTool.description = description;
    newTool.link = link;

    await toolRepository.save(newTool);

    res.send({newTool});
  };

  static edit = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description, link } = req.body;
    const toolRepository = getRepository(Tool);

    const tool = await toolRepository.findOne({ id: Number(id) });

    tool.title = title;
    tool.link = link;
    tool.description = description;

    await toolRepository.save(tool);

    res.send(tool);
  };

  static index = async (req: Request, res: Response) => {
    const { id } = req.params;
    const toolRepository = getRepository(Tool);

    const tool = await toolRepository.findOne({ id: Number(id) });

    res.send(tool);
  };

  static delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    const toolRepository = getRepository(Tool);

    const tool = await toolRepository.findOne({ id: Number(id) });

    await toolRepository.remove(tool);

    res.status(204).send();
  }
}
