import { userRepository } from "../../repositories";
import { User } from "../../entity/user/user-entity";

export class UserService {
  static async getAllUsers(): Promise<User[]> {
    const allUsers: User[] = await userRepository.find({
      relations: {
        posts: true,
      },
    });
    if (!allUsers) throw new Error("Can't get Users");

    return allUsers;
  }

  static async getUserInfo (userId: number): Promise<User> {
    const userInfo: User | null = await userRepository.findOneBy({id: userId});
    if (!userInfo) throw new Error("Cant get user Data");

    return userInfo;
  }
}
