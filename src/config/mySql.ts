import { DataSource } from "typeorm";
import { User } from "../entity/user/user-entity";
import { Post } from "../entity/posts/posts-entity";

export const AppDataSource = new DataSource({
     type: "postgres",
     host: "dpg-cgv3j04s3fvmvqag17sg-a.frankfurt-postgres.render.com/",
     port: 5432,
  username: "grig",
  password: "QEMaOaoi6UyeiyTaVX89AlwJfx1o275v",
  database: "mywebsite_dr6t",
    entities: [User, Post],
    synchronize: true,
    logging: false
})
