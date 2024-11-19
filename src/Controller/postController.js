import { createPostService } from "../service/postService.js";

export async function createPost(req, res){
    console.log(req.file.path);
    console.log(req.body.caption);

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