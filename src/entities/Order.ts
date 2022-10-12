import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Address } from "./Address";

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

  @ManyToOne(() => Address)
  @JoinColumn({ name: "address_id" })
  address: Address;

  @Column()
  adress_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Order };
