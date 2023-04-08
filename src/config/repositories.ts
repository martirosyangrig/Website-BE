import { User } from "../entity/user-entity";
import { AppDataSource } from "./mySql";

export const userRepository = AppDataSource.getRepository(User);
