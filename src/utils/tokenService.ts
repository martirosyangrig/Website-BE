import jwt from "jsonwebtoken";
import { envConfig } from "../config/env";
import { IPayload } from "../interfaces/token-payload";


export const generateToken = (payload: IPayload) =>
  jwt.sign(payload, envConfig.JWT_SECRET, { expiresIn: '1d' })
