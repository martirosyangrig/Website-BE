import validate from "deep-email-validator";
import bycript from "bcrypt"
import { IUserLogin, IUserRegister } from "../../interfaces/auth-types";
import { userRepository } from "../../repositories";
import { UserDto } from "../../dto/user-dto";
import { generateToken } from "../../utils/tokenService";
import { EmailService } from "../../utils/EmailSender";
import { User } from "../../entity/user/user-entity";

export class UserAuthService {
    static async createUser (registerForm: IUserRegister) {
        try {
            const isValidEmail = await validate(registerForm.email);
            if(!isValidEmail.valid) throw new Error("Unknown Email");

            const user: User | null = await userRepository.findOneBy({email: registerForm.email});
            if(user) throw new Error("There is user with that email");

            const hashedPassword = bycript.hashSync(registerForm.password, 8);
            const newUser: User = userRepository.create({...registerForm, password: hashedPassword});
            await userRepository.save(newUser);

            const userData = new UserDto(newUser);
            const emailToken = generateToken({...userData});

            const emailService = new EmailService();
            await emailService.sendVerifyEmail(userData, emailToken)

            return userData;    
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    static async logIn (loginForm: IUserLogin) {
        try {
            const user: User | null = await userRepository.findOneBy({email: loginForm.email});
            if(!user) throw new Error("Invalid Login or Password");

            const match = await bycript.compare(loginForm.password, user.password);
            if(!match) throw new Error("Invalid Login or Password");

            const userData = new UserDto(user);
            const accessToken = generateToken({...userData});

            return {accessToken, userData}
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
}