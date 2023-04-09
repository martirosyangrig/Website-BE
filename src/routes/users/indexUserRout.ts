import { Router } from "express";
import { UserController } from "../../controllers/user/user-controller";

const router = Router();

router.get('/users', UserController.getAllUsers);

export default router;