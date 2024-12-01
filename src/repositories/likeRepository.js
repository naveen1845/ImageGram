import like from "../Schema/like.js";

export const createLike = async (onModel, likeableId, userId) => {
    try {
        const newLike = await like.create({ onModel, likeableId, user: userId })
        return newLike;
    } catch (error) {
        console.log(error); 
    }
}