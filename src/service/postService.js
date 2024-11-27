
import { cloudinary } from "../Config/cloudinaryConfig.js";
import { countDocuments, createPost, findAllPost, findPostById, findPostByIdAndDelete, findPostByIdAndUpdate } from "../repositories/postRepository.js";

export const createPostService = async (createPostObject) => {
    const caption = createPostObject.caption;
    const image = createPostObject.image;
    const userId = createPostObject.userId;

    const post = await createPost(caption, image, userId);

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

export const getPostbyIdAndUpdateService = async (id, updateObject) => {
    const response = await findPostByIdAndUpdate(id, updateObject);

    return response;
}

export const getPostbyIdAndDeleteService = async(id, user) => {
    const post = await findPostById(id)

    if (post.userId._id != user._id) {
        throw{
            status: 400,
            message: 'Unauthorised'
        }
    }

    const response = await findPostByIdAndDelete(id);

    return response;
}


export const deleteImageFromCloudinary = async(publicID) => {
    try {
        const response = await cloudinary.uploader.destroy(publicID);
        return response;
        
    } catch (error) {
        console.log('error deleting image from cloudinary');
        
    }
}
