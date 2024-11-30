import comment from "../Schema/comment.js";


export const createComment = async function(onModel, content, commentableId, userId){
    try {
        const newComment = await comment.create( { onModel, content, commentableId, user: userId, replies: [], likes: [] } )
        return newComment;
    } catch (error) {
        console.log(error);
    }
}


export const findCommentById = async function(id){
    try {
        const foundComment = await comment.findById(id).populate('replies');
        return foundComment
    } catch (error) {
        throw error;
        
    }
}

