import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { User } from "./User";

@Entity("addresses")
class Address {
  @PrimaryColumn()
  id: string;

  @Column()
  estado: string;

  @Column()
  cidade: string;

  @Column()
  bairro: string;

  @Column()
  rua: string;

  @Column()
  numero: number;

  @Column()
  cep: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Address };
