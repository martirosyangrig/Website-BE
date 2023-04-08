import { Response, Request } from "express";
import { UserVerifyService } from "../../services/user-verify.service";

export class UserVerifyController {
    static async verifyEmail(req: Request, res: Response) {
        try {
            const token = req.params.token;
            const isDone = await UserVerifyService.verifyEmail(token);

            if(isDone) return res.redirect("https://www.linkedin.com/in/grigor-martirosyan-44a657254/")
        } catch (error) {
            res.status(500).json({message: `${error}`})
        }
    }
}