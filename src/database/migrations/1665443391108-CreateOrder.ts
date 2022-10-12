import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrder1665443391108 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "orders",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "product_name",
            type: "varchar",
          },
          {
            name: "unit_price",
            type: "numeric",
          },
          {
            name: "quantity",
            type: "numeric",
          },
          {
            name: "address_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "frete_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "user_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "total_value",
            type: "numeric",
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
          {
            name: "FKFrete",
            referencedTableName: "frete",
            referencedColumnNames: ["id"],
            columnNames: ["frete_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
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
    await queryRunner.dropTable("orders");
  }
}
