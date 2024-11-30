import { createCommentService, findCommentByIdService } from "../service/commentService.js";

export async function createComment(req, res){
    
    try {
        const {onModel, content, commentableId} = req.body
        const newComment = await createCommentService(onModel, content, commentableId, req.user._id);

        return res.status(200).json({
            success: true,
            message: 'Comment Created Successfully',
            data: newComment
        })
    } catch (error) {
        console.log(error);
        if (error.status) {
            return res.status(error.status).json({
                success: true,
                message: error.message
            })
        }

        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}


export async function getCommentById(req, res) {
    try {
        const commentId = req.params.id;
        const response = await findCommentByIdService(commentId);
        if (!response) {
            return res.status(400).json({
                success: false,
                message: 'Comment not found'
            })
        }
        return res.status(200).json({
            success: true,
            message: "Comment found successfully",
            data: response
        });
    } catch (error) {
        if(error.status) {
            return res.status(error.status).json({
                success: false,
                message: error.message
            })
        }
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}