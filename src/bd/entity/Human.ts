import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Address } from "./Address";

@Entity()
export class Human {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        nullable: true
    })
    age: number;

    @ManyToOne(type => Address, address => address.humans, {eager: true})
    address: Address;
}