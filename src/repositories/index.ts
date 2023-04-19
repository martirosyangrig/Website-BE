import { Post } from "../entity/posts/posts-entity";
import { User } from "../entity/user/user-entity";
import { AppDataSource } from "../config/postgres";

export const userRepository = AppDataSource.getRepository(User);
export const postRepository = AppDataSource.getRepository(Post);