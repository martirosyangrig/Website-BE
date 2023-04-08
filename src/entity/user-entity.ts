import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        length: 100,
    })
    email: string

    @Column({
        length: 120
    })
    password: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    verified: boolean

 

    constructor(email: string, password: string, firstName: string, lastName:string) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.verified = false
    }
}