import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User2 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
