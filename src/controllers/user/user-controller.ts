import { Request, Response } from "express";
import { UserService } from "../../services/users/user-service";
import { User } from "../../entity/user/user-entity";

export class UserController {
    static async getAllUsers(req: Request, res: Response) {
        try {   
            const allUsers: User[] = await UserService.getAllUsers();

            res.status(200).json(allUsers);
        } catch (error) {
            res.status(500).json({message: `${error}`});
        }
    }
}