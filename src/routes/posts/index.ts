import { Router } from "express";
import { PostsController } from "../../controllers/posts/posts-controller";

const router = Router();

router.post('/create', PostsController.create);
router.get('/all', PostsController.getAll);
router.delete('/:id', PostsController.delete);

export default router;