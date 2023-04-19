import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "dpg-cgv3j04s3fvmvqag17sg-a.frankfurt-postgres.render.com",
    port: 5432,
    username: "grig",
    password: "QEMaOaoi6UyeiyTaVX89AlwJfx1o275v",
    database: "mywebsite_dr6t",
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migrations/*.ts"],
    synchronize: false,
    logging: false,
    ssl: {
        rejectUnauthorized: true
    },
});
