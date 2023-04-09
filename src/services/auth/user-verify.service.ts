import jwt from "jsonwebtoken"
import { envConfig } from "../../config/env";
import { userRepository } from "../../config/repositories";
import { IPayload } from "../../interfaces/token-payload";
import { User } from "../../entity/user/user-entity";

export class UserVerifyService {
    static async verifyEmail(token: string) {
        try {
            if(!token) throw new Error("No verify token");

            const decoded  = jwt.verify(token , envConfig.JWT_SECRET) as IPayload;
            const user: User | null = await userRepository.findOneBy({email: decoded.email});
            if(!user) throw new Error("User Not found");

            user.verified = true;
            await userRepository.save(user)
            return true;
        } catch (error) {
            throw new Error(`${error}`)            
        }
        
    }
}