import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

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

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Frete };
