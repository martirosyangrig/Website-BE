import dotenv from "dotenv";

dotenv.config();

export const envConfig = {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET || "mysecret",
    MAILER_ADDRESS: process.env.MAILER_ADDRESS,
    MAILER_PASSWORD: process.env.MAILER_PASSWORD,
    ORIGIN_URL: process.env.ORIGIN_URL
}