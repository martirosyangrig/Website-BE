import { Router } from "express";
import AuthRouter from "./auth/user-auth";
import UserRouter from "./users"
import PostRouter from "./posts";
import { UserAccess } from "../middleware/user-access";

const router = Router()

router.use("/api", AuthRouter);
router.use("/api/users", UserAccess.veryifyUser, UserRouter);
router.use("/api/posts", UserAccess.veryifyUser, PostRouter);

export default router