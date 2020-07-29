import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Tool } from "@entities/Tool";
import { Tag } from "@entities/Tag";

export class ToolController {
  static list = async (req: Request, res: Response) => {
    const toolRepository = getRepository(Tool);

    const tools = await toolRepository.find();
    const serializedTags = tools.map((tool) => {
      return tool.tags.map((tag) => {
        return tag.name;
      });
    });

    const serializedTools = tools.map((tool, index) => {
      return { ...tool, tags: serializedTags[index] };
    });

    res.status(200).send(serializedTools);
  };

  static create = async (req: Request, res: Response) => {
    const toolRepository = getRepository(Tool);
    const tagRepository = getRepository(Tag);

    const { title, link, description, tags } = req.body;

    try {
      let tagsToInsert: Tag[] = [] as Tag[];

      tags.map((tagName: string) => {
        const newTag = new Tag();
        newTag.name = tagName;
        tagsToInsert.push(newTag);
      });

      await tagRepository.save(tagsToInsert);

      const newTool = new Tool();

      newTool.title = title;
      newTool.description = description;
      newTool.link = link;
      newTool.tags = tagsToInsert;

      await toolRepository.save(newTool);

      res.status(201).send();
    } catch (error) {
      res.status(500).send({ response: `Error trying to create: ${error}.` });
    }
  };

  static edit = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description, link, tags } = req.body;
    const toolRepository = getRepository(Tool);
    const tagRepository = getRepository(Tag);

    const tool = await toolRepository.findOne({ id: Number(id) });

    if (!tool) {
      res.status(404).send({ response: "Item not found." });
      return;
    }

    try {
      let tagsToInsert: Tag[] = [] as Tag[];

      tags.map((tagName: string) => {
        const newTag = new Tag();
        newTag.name = tagName;
        tagsToInsert.push(newTag);
      });

      await tagRepository.save(tagsToInsert);

      tool.title = title;
      tool.link = link;
      tool.description = description;
      tool.tags = tagsToInsert;
      await toolRepository.save(tool);
      res.send(tool);
    } catch (error) {
      res.status(400).send({ response: `Error inserting object: ${error}` });
    }
  };

  static index = async (req: Request, res: Response) => {
    const { id } = req.params;
    const toolRepository = getRepository(Tool);

    const tool = await toolRepository.findOne({ id: Number(id) });

    if (!tool) {
      res.status(404).send({ response: "Item not found" });
      return;
    }

    res.send(tool);
  };

  static delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    const toolRepository = getRepository(Tool);

    const tool = await toolRepository.findOne({ id: Number(id) });

    if (!tool) {
      res.status(404).send({ response: "Item not found" });
      return;
    }

    try {
      await toolRepository.remove(tool);
    } catch (error) {
      res.status(404).send({ response: `Error deleting item ${error}` });
    }

    res.status(204).send();
  };
}
