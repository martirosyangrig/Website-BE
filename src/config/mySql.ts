import { DataSource } from "typeorm";
import { User } from "../entity/user/user-entity";
import { Post } from "../entity/posts/posts-entity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "mywebsite",
    entities: [User, Post],
    synchronize: true,
    logging: false
})