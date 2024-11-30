import { createComment, findCommentById } from "../repositories/commentRepository.js";
import { findPostById } from "../repositories/postRepository.js";

export const createCommentService = async function(onModel, content, commentableId, userId){
    console.log("From service: ", onModel, content, commentableId, userId);
    
    try {
        const parent = await fetchCommentParent(onModel, commentableId)
        if (!parent) {
            throw {
                status: 400,
                message: `${onModel} not found`
            }
        }

        const newComment = await createComment(onModel, content, commentableId, userId);

        await addChildCommentToParent(parent, onModel, newComment)

        return newComment;


    } catch (error) {
        console.log(error);
        
    }
}

const addChildCommentToParent = async (parent, onModel, newComment) => {
    try {
        if (onModel == 'Post') {
            parent.comments.push(newComment._id)
        } else if (onModel == 'Comment') {
            parent.replies.push(newComment._id);
        }
        await parent.save();
    } catch (error) {
        console.log(error);
        
    }
}


const fetchCommentParent = async(onModel, commentableId) => {
    try {
        let parent;
        if (onModel == 'Post') {
            parent = await findPostById(commentableId)
        }else if(onModel == 'Comment'){
            parent = await findCommentById(commentableId)
        }
        return parent;
    } catch (error) {
        throw error;
    }
}


export const findCommentByIdService = async (id) => {
    try {
        const comment = await findCommentById(id);
        return comment;
    } catch (error) {
        throw error
    }
}