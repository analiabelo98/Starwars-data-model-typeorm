import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable,OneToMany, ManyToOne
  } from 'typeorm';
import {Favs} from "./Favs"
import {Characters} from "./Characters"

  @Entity()
  export class Planets extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    description: string;
  
    @Column()
    population: number;
  
    @Column()
    climate: string;
    
    @OneToMany(() => Favs, favs => favs.planets)
    planets: Planets[];
    

    @OneToMany(() => Characters, characters => characters.planets)
    characters: Characters[];

  }