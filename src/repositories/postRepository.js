import post from "../Schema/post.js";

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
        const foundPost = await post.findById(id).populate('userId', 'username email _id')
        return foundPost;
    } catch (error) {
        throw error 
    }
}

export const findAllPost = async function(limit, page){
    try {
        const offset = (page - 1) * limit;

        const foundPost = await post.find().sort({ createdAt : -1 }).skip(offset).limit(limit).populate('userId', 'username email _id');
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

export const findPostByIdAndUpdate = async function(id, updateObject) {
    try {
        const updatedPost = await post.findByIdAndUpdate(id, updateObject, {new: true})
        return updatedPost;
    } catch (error) {
        console.log(error);
        
    }
}

export const findPostByIdAndDelete = async function (id) {
    try {
        const response = await post.findByIdAndDelete(id);
        return response;
    } catch (error) {
        console.log(error);
        
    }
}

