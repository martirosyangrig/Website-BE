import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Post } from "../posts/posts-entity"

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

    @OneToMany(() => Post, post => post.user)
    posts: Post[];


}