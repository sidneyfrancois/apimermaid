import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Address } from "./Address";

@Entity("frete")
class Frete {
  @PrimaryColumn()
  id: string;

  @Column({ name: "forma_envio" })
  formaEnvio: string;

  @Column({ name: "preco_envio" })
  precoEnvio: number;

  @Column()
  observacoes: string;

  @ManyToOne(() => Address)
  @JoinColumn({ name: "address_id" })
  address: Address;

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

export { Frete };
