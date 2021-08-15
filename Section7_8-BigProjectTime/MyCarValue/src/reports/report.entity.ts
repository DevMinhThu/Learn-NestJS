import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  //   @Column()
  //   make: string;

  //   @Column()
  //   model: string;

  //   @Column()
  //   year: number;

  //   @Column()
  //   mileage: number;

  //   @Column()
  //   longitude: number;

  //   @Column()
  //   latitude: number;

  @Column()
  price: number;
}
