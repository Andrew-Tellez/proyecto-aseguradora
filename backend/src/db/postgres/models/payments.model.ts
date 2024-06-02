import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.model";
import { Policy } from "./policy.model";

@Entity()
export class Payment extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: number;

  @ManyToOne(() => Policy, (policy) => policy.id)
  policy: number;

}