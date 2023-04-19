import { Router } from "express";
import { UserController } from "../../controllers/user/user-controller";

const router = Router();

router.get('/all', UserController.getAllUsers);

export default router;