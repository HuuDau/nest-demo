import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User3 {
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
