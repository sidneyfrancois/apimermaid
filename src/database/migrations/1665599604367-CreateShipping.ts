import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateShipping1665599604367 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "frete",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "forma_envio",
            type: "varchar",
          },
          {
            name: "preco_envio",
            type: "numeric",
          },
          {
            name: "observacoes",
            type: "varchar",
          },
          {
            name: "address_id",
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
            name: "FKAddress",
            referencedTableName: "addresses",
            referencedColumnNames: ["id"],
            columnNames: ["address_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("frete");
  }
}
