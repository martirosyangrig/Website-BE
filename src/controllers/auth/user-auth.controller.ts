import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { IUserLogin, IUserRegister } from "../../interfaces/auth-types";
import { UserAuthService } from "../../services/auth/user-auth.service";
import { UserDto } from "../../dto/user-dto";


export class UserAuthController {
    static async signUp (req: Request<IUserRegister>, res: Response<UserDto | unknown>): Promise<void> {
        try {
            const errors = validationResult(req);
            if (errors["errors"].length) throw new Error("Invalid Registration Form");

            const registrationForm: IUserRegister = req.body;
            const userData = await UserAuthService.createUser(registrationForm);

            res.json(userData);            
        } catch (error) {
           res.status(404).send(error)
        }
    }

    static async logIn (req: Request<IUserLogin>, res: Response): Promise<void> {
        try {
            const errors = validationResult(req)
            if (errors["errors"].length) throw new Error("Invalid Login Form");

            const loginForm: IUserLogin = req.body;
            const userData = await UserAuthService.logIn(loginForm);

            res.status(200).json(userData);
        } catch (error) {
           res.status(404).json({message: `${error}`})
        }
    }
}