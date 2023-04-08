import validate from "deep-email-validator";
import bycript from "bcrypt"
import { IUserLogin, IUserRegister } from "../interfaces/auth-types";
import { userRepository } from "../config/repositories";
import { UserDto } from "../dto/user-dto";
import { generateToken } from "../utils/tokenService";
import { log } from "console";
import { EmailService } from "../utils/EmailSender";

export class UserAuthService {
    static async createUser (registerForm: IUserRegister) {
        try {
            const isValidEmail = await validate(registerForm.email);
            if(!isValidEmail.valid) throw new Error("Unknown Email");

            const user = await userRepository.findOneBy({email: registerForm.email});
            if(user) throw new Error("There is user with that email");

            const hashedPassword = bycript.hashSync(registerForm.password, 8);
            const newUser = userRepository.create({...registerForm, password: hashedPassword});
            await userRepository.save(newUser);

            const userData = new UserDto(newUser);
            
            const emailService = new EmailService();
            const emailToken = generateToken({...userData});
            await emailService.sendVerifyEmail(userData, emailToken)

            return userData;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    static async logIn (loginForm: IUserLogin) {
        try {
            const user = await userRepository.findOneBy({email: loginForm.email});
            if(!user) throw new Error("Invalid Login or Password");

            const match = await bycript.compare(loginForm.password, user.password);
            if(!match) throw new Error("Invalid Login or Password");

            const userData = new UserDto(user);
            console.log(userData);
            const accessToken = generateToken({...userData});
            return {accessToken, userData}
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
}