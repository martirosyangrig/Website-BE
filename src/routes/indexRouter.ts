import { Router } from "express";
import AuthRouter from "./auth/user-auth";
import UserRouter from "./users"
import PostRouter from "./posts";

const router = Router()

router.use("/api", AuthRouter);
router.use("/api/users", UserRouter);
router.use("/api/posts", PostRouter);

export default router