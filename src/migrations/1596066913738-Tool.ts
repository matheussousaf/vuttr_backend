import { MigrationInterface, QueryRunner } from "typeorm";

export class Tool1596066913738 implements MigrationInterface {
  name = "Tool1596066913738";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createDatabase("vuttr_core_test", true);
    await queryRunner.createDatabase("vuttr_core", true);
    await queryRunner.query(
      "CREATE TABLE IF NOT EXISTS `tool` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `link` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB"
    );
    await queryRunner.query(
      "CREATE TABLE IF NOT EXISTS`tag` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `toolId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB"
    );
    await queryRunner.query(
      "ALTER TABLE `tag` ADD CONSTRAINT `FK_c8542319bd62acbdb7a86864cad` FOREIGN KEY (`toolId`) REFERENCES `tool`(`id`) ON DELETE CASCADE ON UPDATE CASCADE"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `tag` DROP FOREIGN KEY `FK_c8542319bd62acbdb7a86864cad`"
    );
    await queryRunner.query("DROP TABLE `tag`");
    await queryRunner.query("DROP TABLE `tool`");
  }
}
