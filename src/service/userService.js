import { createUser } from "../repositories/userRepository.js"

export const  createUserService = async function(createUserObject){
    const user = await createUser(
        createUserObject
    );
    return user;
}