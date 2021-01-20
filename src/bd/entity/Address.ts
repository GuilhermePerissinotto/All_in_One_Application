import { Human } from './Human';
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    street: string;

    @Column()
    number: number;

    @OneToMany(type => Human, human => human.address)
    humans: Human[];
}