import { userRepository } from "../../repositories";
import { User } from "../../entity/user/user-entity";

export class UserService {
  static async getAllUsers() {
    const allUsers: User[] = await userRepository.find({
      relations: {
        posts: true,
      },
    });
    if (!allUsers) throw new Error("Can't get Users");

    return allUsers;
  }
}
