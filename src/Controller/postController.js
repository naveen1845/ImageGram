import { createPostService } from "../service/postService.js";

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

export async function findAllUserController(req, res){
    // get limit from the user
    // get page from the user

    // call the service function by passing the limit and the user object

    // return a response
}

