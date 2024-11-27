import { createPostService, deleteImageFromCloudinary, getAllPostService, getPostbyIdAndDeleteService, getPostbyIdAndUpdateService } from "../service/postService.js";

export async function createPost(req, res){
    
    const caption = req.body.caption;
    const image = req.file.path;
    const userId = req.user._id;

    const post = await createPostService({ 
        caption: caption,
        image: image,
        userId: userId
    });
 
    return res.status(201).json({
        success: true,
        message: "POST CREATED SUCCESSFULLY",
        data: post

    })
}

export async function findAllPostsController(req, res){
    const limit = req.query.limit || 5;
    const page = req.query.page || 1;

    const paginatedPosts = await getAllPostService({
        limit: limit,
        page: page
    })

    return res.status(200).json({
        success: true,
        message: 'posts fetched successfully',
        data: paginatedPosts
    })
}


export async function getPostbyIdAndUpdateController(req, res){
    try {
        const updateObject = req.body;
        if (req.file) {
            updateObject.image = req.file.path;
        }
        const response = await getPostbyIdAndUpdateService(req.params.id, updateObject);

        return res.status(200).json({
            success: true,
            message: 'post updated successfully',
            updatedPost: response
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'internal server error'
        })
    }
    
}

export async function getPostbyIdAndDeleteController(req, res) {
    try {
        const id = req.params.id;

        const response = await getPostbyIdAndDeleteService(id, req.user);
        if(!response){
            return res.status(404).json({
                success: false,
                message: 'Post not found'
            })
        }

        const imageUrl = response.image;
        const publicID = imageUrl.split('/').pop().split('.')[0];

        await deleteImageFromCloudinary(publicID);

        return res.status(200).json({
            success: true,
            message: 'Post deleted Successfully',
            postDeleted: response
        })
    } catch (error) {
        if(error.status){
            return res.status(error.status).json({
                success: false,
                message: error.message
            })
        }
        return res.status(500).json({
            success: false,
            message:'Internal server error',
            data: error
        })
    }
}


