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
            name: "total_value",
            type: "numeric",
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
    await queryRunner.dropTable("orders");
  }
}
