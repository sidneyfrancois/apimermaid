import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("orders")
class Order {
  @PrimaryColumn()
  id: string;

  @Column({ name: "product_name" })
  productName: string;

  @Column({ name: "unit_price" })
  unitPrice: number;

  @Column()
  quantity: number;

  @Column({ name: "total_value" })
  totalValue: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Order };
