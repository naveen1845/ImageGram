import { countDocuments, createPost, findAllPost } from "../repositories/postRepository.js";

export const createPostService = async (createPostObject) => {
    const caption = createPostObject.caption;
    const image = createPostObject.image;

    const post = await createPost(caption, image);

    return post;
}


export const getAllPostService = async (getAllPostObject) => {
    // gets the values of limit and page number from the req
    const limit = getAllPostObject.limit;
    const page = getAllPostObject.page;

    const posts = await findAllPost(limit, page);

    const totalDocuments = await countDocuments();
    const totalPages = Math.ceil( totalDocuments / limit );

    return {
        posts,
        totalDocuments,
        totalPages

    }
}
