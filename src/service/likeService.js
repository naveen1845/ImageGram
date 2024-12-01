import { findCommentById } from "../repositories/commentRepository.js";
import { createLike } from "../repositories/likeRepository.js";
import { findPostById } from "../repositories/postRepository.js";

export const createLikeService = async (onModel, likeableId, userId) => {
    try {
        let parent = await fetchLikeParent(onModel, likeableId);
        if (!parent) {
            throw {
                status: 400,
                message: `${onModel} not Found`
            }
        }



        const newLike = await createLike(onModel, likeableId, userId);
        

        parent.likes.push(newLike._id);
        await parent.save();

        return newLike;
    } catch (error) {
        throw error;
    }


}

async function fetchLikeParent(onModel, likeableId){
    let parent;
    if (onModel == 'Post') {
        parent = await findPostById(likeableId);
    } else if(onModel == 'Comment'){
        parent = await findCommentById(likeableId);
    }

    return parent;
}