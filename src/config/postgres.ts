import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "mywebsite",
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migrations/*.ts"],
    synchronize: false,
    logging: false
});
