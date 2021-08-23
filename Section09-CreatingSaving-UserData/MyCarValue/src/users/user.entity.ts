import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  // mỗi khi 1 user được add vào DB => hàm logInsert() sẽ được thực thi
  @AfterInsert()
  logInsert() {
    console.log('Inserted User with Id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Update User with Id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Remove User with Id', this.id);
  }
}
