import { DataSource } from "typeorm";
import { User } from "../entity/user/user-entity";
import { Post } from "../entity/posts/posts-entity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "aws.connect.psdb.cloud",
    port: 3306,
    username: "r9i066i647nwt4p64978",
    password: "pscale_pw_7DePWrFbPBfQa9ba5kRZCGjdaFqi2teqvksB8DW29JK",
    database: "mywebsite",
    entities: [User, Post],
    synchronize: true,
    logging: false
})
