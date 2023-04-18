import app from "./app";
import "reflect-metadata";
import { AppDataSource } from "./config/mySql";
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
