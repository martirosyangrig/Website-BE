import { Router } from "express";
import AuthRouter from "./users/userAuthRout";

const router = Router()

router.use("/api/auth", AuthRouter);

export default router