import { createPostService, getAllPostService } from "../service/postService.js";

export async function createPost(req, res){
    
    const caption = req.body.caption;
    const image = req.file.path;

    const post = await createPostService({ 
        caption: caption,
        image: image
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

    res.status(200).json({
        success: true,
        message: 'posts fetched successfully',
        data: paginatedPosts
    })
}

