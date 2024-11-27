import { findPostById } from "../repositories/postRepository.js";

export async function isPostMadeBySameUser(req, res, next){
    try {
        
        const post = await findPostById(req.params.id);

        if (!post) {
            return res.status(400).json({
                success: false,
                message: 'Post not found'
            })
        }

        const userId = req.user
        
        if (userId == post.userId._id) {
            next()
        }else{
            return res.status(400).json({
                success: false,
                message: 'Post not made by this User'
            })
        }
    } catch (error) {
        console.log(error);
        
    }
}