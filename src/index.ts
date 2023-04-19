import app from "./app";
import { AppDataSource } from "./config/postgres";
import "reflect-metadata";
import { envConfig } from "./config/env";
import IndexRouter from "./routes/indexRouter";

const PORT = envConfig.PORT || 8080

app.use("/", IndexRouter)


const start = async () => {
  try {
    await AppDataSource.initialize()
    app.listen(PORT, () => {
      console.log(`Example app listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}
start();
