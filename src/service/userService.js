import { createUser } from "../repositories/userRepository.js"

export const  createUserService = async function(createUserObject){
    try {
        const newUser = await createUser(createUserObject);
        return newUser;
    } catch (error) {
        if (error.name == 'MongoServerError' && error.code == 11000) {
            throw {
                status: 400,
                message: 'User with the same email or username already exists' 
            }
        }

        throw error;
    }
}