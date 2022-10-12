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
            name: "user_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKUser",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("addresses");
  }
}
