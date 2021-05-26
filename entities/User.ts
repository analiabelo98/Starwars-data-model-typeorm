import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable, OneToMany
  } from 'typeorm';
import {Favs} from "./Favs"
   
  @Entity()
  export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    first_name: string;
  
    @Column()
    last_name: string;
  
    @Column({unique: true})
    email: string;
  
    @Column({unique: true})
    password: string;

    @OneToMany(() => Favs, favs => favs.user)
    favs: Favs[];
    
  }