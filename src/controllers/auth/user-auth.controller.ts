import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { IUserLogin, IUserRegister } from "../../interfaces/auth-types";
import { UserAuthService } from "../../services/auth/user-auth.service";


export class UserAuthController {
    static async signUp (req: Request, res: Response) {
        try {
            const errors = validationResult(req);
            if (errors["errors"].length) throw new Error("Invalid Registration Form");

            const registrationForm: IUserRegister = req.body;
            const userData = await UserAuthService.createUser(registrationForm);

            res.json(userData);            
        } catch (error) {
           res.status(404).json({message: `${error}`})
        }
    }

    static async logIn (req: Request, res: Response) {
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