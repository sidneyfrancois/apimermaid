import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAddress1665456487655 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "addresses",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "estado",
            type: "varchar",
          },
          {
            name: "cidade",
            type: "varchar",
          },
          {
            name: "bairro",
            type: "varchar",
          },
          {
            name: "rua",
            type: "varchar",
          },
          {
            name: "numero",
            type: "numeric",
          },
          {
            name: "cep",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("addresses");
  }
}
