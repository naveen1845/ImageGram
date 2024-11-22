import post from "../Schema/post.js";

export const createPost = async function(caption, image){
    try {
        const newPost = await post.create({caption, image})
        return newPost;
    } catch (error) {
        console.log(error);
        
    }
}

export const findPostById = async function(id){
    try {
        const foundPost = await post.findById({ id })
        return foundPost;
    } catch (error) {
        console.log(error);
        
    }
}

export const findAllPost = async function(limit, page){
    try {
        const offset = (page - 1) * limit;

        const foundPost = await post.find().sort({ createdAt : -1 }).skip(offset).limit(limit);
        return foundPost;
    } catch (error) {
        console.log(error);
        
    }
}

export const countDocuments = async function(){
    try {
        const count = await post.countDocuments();

        return count
    } catch (error) {
        console.log(error);
        
    }
}

