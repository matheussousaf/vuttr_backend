import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { Length } from "class-validator";
import { Tag } from "./Tag";

@Entity("tool")
export class Tool {
  @PrimaryGeneratedColumn()
  id: number;

  @Length(3, 55)
  @Column()
  title: string;

  @Length(3, 255)
  @Column()
  link: string;

  @Length(3, 255)
  @Column()
  description: string;

  @OneToMany((type) => Tag, (tag) => tag.id)
  tools: Tag[];
}
