import { DataSource } from "typeorm";
import { User } from "../entity/user/user-entity";
import { Post } from "../entity/posts/posts-entity";
import { UserPost1681543399480 } from "../migrations/1681543399480-user_post";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "dpg-cgv3j04s3fvmvqag17sg-a.frankfurt-postgres.render.com",
    port: 5432,
    username: "grig",
    password: "QEMaOaoi6UyeiyTaVX89AlwJfx1o275v",
    database: "mywebsite_dr6t",
    entities: [User, Post],
    migrations: [UserPost1681543399480],
    synchronize: false,
    logging: false,
    ssl: {
        rejectUnauthorized: true
    },
});
