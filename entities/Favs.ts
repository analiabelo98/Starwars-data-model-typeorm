import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable, ManyToOne, OneToMany
  } from 'typeorm';
  import {Planets} from "./Planets"
  import {Characters} from "./Characters"
  import {Vehicles} from "./Vehicles"
  import {User} from "./User"
  

  @Entity()
  export class Favs extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
   @ManyToOne(() => User, user => user.favs)
    user: User;

     @ManyToMany(() => Planets)
     @JoinTable()
     planets: Planets[];
   
    @ManyToMany(() => Characters)
    @JoinTable()
    characters: Characters[];

    @ManyToMany(() => Vehicles)
    @JoinTable()
    vehicles: Vehicles[];
  }