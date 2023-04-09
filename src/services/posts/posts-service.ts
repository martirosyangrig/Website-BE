import { postRepository, userRepository } from "../../config/repositories";
import { Post } from "../../entity/posts/posts-entity";
import { User } from "../../entity/user/user-entity";
import { IPost } from "../../interfaces/posts-types";

export class PostsService {
    static async create (postInfo: IPost) {
        try {
            const user: User | null = await userRepository.findOneBy({id: postInfo.userId});
            if(!user) throw new Error("Not such a User");

            const newPost: Post = postRepository.create({title: postInfo.title, content: postInfo.content, user: user});
            await postRepository.save(newPost);

            return newPost;
        } catch (error) {
            throw new Error(`${error}`)
        }
    }

    static async getAll () {
        try {
            const posts: Post[] = await postRepository.find({
                relations: {
                    user: true
                }
            });
            if(!posts) throw new Error("Cant find Posts");

            return posts;
        } catch (error) {
            throw new Error(`${error}`)
        }
    }

    static async delete (id: number) {
        try {
            await postRepository.delete({id: id});
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
}