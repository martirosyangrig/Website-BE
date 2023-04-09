import { Request, Response } from "express";
import { PostsService } from "../../services/posts/posts-service";
import { Post } from "../../entity/posts/posts-entity";
import { IPost } from "../../interfaces/posts-types";

export class PostsController {
    static async create (req: Request, res: Response) {
        try {
            const postInfo: IPost = req.body;

            const postData: Post = await PostsService.create(postInfo);

            res.status(200).json(postData);
        } catch (error) {
            res.json({message: `${error}`})
        }
    }

    static async getAll (req: Request, res: Response) {
        try {
            const posts: Post[] = await PostsService.getAll()
            if(!posts) throw new Error("Cant find Posts");

            res.status(200).json(posts)
        } catch (error) {
            res.status(404).json({message: `${error}`})
        }
    }

    static async delete (req: Request, res: Response) {
        try {
            const id = req.params.id;
            await PostsService.delete(+id);
            
            return {deletd: true}
        } catch (error) {
            res.status(500).json({message: `${error}`});
        }
    }
}