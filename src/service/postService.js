import { createPost, findAllPost } from "../repositories/postRepository.js";

export const createPostService = async (createPostObject) => {
    const caption = createPostObject.caption;
    const image = createPostObject.image;

    const post = await createPost(caption, image);

    return post;
}


export const getAllPostService = async (getAllPostObject) => {
    // gets the values of limit and page number from the req

    const post = await findAllPost(limit, page);

    return post;
}
