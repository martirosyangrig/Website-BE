import { Router } from "express";
import AuthRouter from "./auth/userAuthRout";
import UserRouter from "./users/indexUserRout"
import PostRouter from "./posts/indexPostsRout";

const router = Router()

router.use("/api", AuthRouter);
router.use("/api", UserRouter);
router.use("/api", PostRouter);

export default router