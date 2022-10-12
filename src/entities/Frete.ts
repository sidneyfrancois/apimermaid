import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("frete")
class Frete {
  @PrimaryColumn()
  id: string;

  @Column()
  forma_envio: string;

  @Column()
  preco_envio: number;

  @Column()
  observacoes: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Frete };
