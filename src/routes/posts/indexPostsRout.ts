import { Router } from "express";
import { PostsController } from "../../controllers/posts/posts-controller";

const router = Router();

router.post('/post/create', PostsController.create);
router.get('/posts', PostsController.getAll);
router.delete('/posts/:id', PostsController.delete);

export default router;