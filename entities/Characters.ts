import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable, OneToMany, ManyToOne
  } from 'typeorm';
  import {Favs} from "./Favs"
  import {Planets} from "./Planets"
   
  @Entity()
  export class Characters extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    birth: string;
  
    @Column()
    gender: string;
  
    
    @OneToMany(() => Favs, favs => favs.characters)
    characters: Characters[];

    @ManyToOne(() => Planets, planets => planets.characters)
    planets: Planets;

    
  }