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
import { Frete } from "./Frete";
import { User } from "./User";

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

  @ManyToOne(() => Frete)
  @JoinColumn({ name: "frete_id" })
  frete: Frete;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  frete_id: string;

  @Column()
  address_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Order };
