import  jwt  from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import { envConfig } from '../config/env';

export class UserAccess {
    static async veryifyUser (req: Request, res: Response, next: NextFunction) {
        try {
            const accessToken = req.header('Authorization')?.split(' ')[1]
            if (!accessToken) throw new Error('AccessToken not found!');

            const decoded = jwt.verify(accessToken, envConfig.JWT_SECRET)as Record<string, any> ;
            if (!decoded) throw new Error('Cant verify Token');

            req.id = decoded.id;
            next();

        } catch (error) {
            res.status(403).send({err: `${error}`});
        }
    }
}