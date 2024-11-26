import user from "../Schema/user.js";

export const createUser = async function(createUserObject){
    try {
        const userCreated = await user.create(createUserObject);
        return userCreated;
    } catch (error) {
        throw error
    }
}

export const findUserByEmail = async function(email) {
    try {
        const userFound = await user.findOne({ email });
        return userFound;
    } catch (error) {
        console.log(error);        
    }
}

export const findAllUsers = async function(){
    try {
        const allUsers = user.find();
        return allUsers;
    } catch (error) {
        console.log(error);        
    }
}

