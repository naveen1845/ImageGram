import post from "../Schema/post";

export const createPost = async function(caption, image, userId){
    try {
        const newPost = await post.create({caption, image, userId})
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

export const findAllPost = async function(){
    try {
        const foundPost = await post.find()
        return foundPost;
    } catch (error) {
        console.log(error);
        
    }
}

