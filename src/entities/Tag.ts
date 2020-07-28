import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Tool } from "./Tool";
import { Length } from "class-validator";

@Entity("tag")
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(3, 15)
  name: string;

  @ManyToOne((type) => Tool, (tool) => tool.tags, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  tool: Tool;
}
