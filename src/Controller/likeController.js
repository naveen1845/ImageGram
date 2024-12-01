import { createLikeService } from "../service/likeService.js";

export async function createLike(req, res){
    try {
        const {onModel, likeableId} = req.body
        const newLike = await createLikeService(onModel, likeableId, req.user._id);
        return res.status(200).json({
            success: true,
            message: 'Like create successfully',
            data: newLike
        })
    } catch(error) {
        
        if(error.status) {
            return res.status(error.status).json({
                success: false,
                message: error.message
            })
        }
        return res.status(500).json({
            success: false,
            message: 'internal server error'
        })
    }
}