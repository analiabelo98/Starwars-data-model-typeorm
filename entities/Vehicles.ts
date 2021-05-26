import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable, OneToMany
  } from 'typeorm';
  import {Favs} from "./Favs"
   
  @Entity()
  export class Vehicles extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    description: string;
  
    @Column()
    model: string;
  
    @Column()
    cost: number;

    @OneToMany(() => Favs, favs => favs.vehicles)
    vehicles: Vehicles[];
  }