import { createUser, findUserByEmail } from "../repositories/userRepository.js"
import bcrypt from "bcrypt"
import { generateToken } from "../Utils/jwt.js";

export const createUserService = async function(createUserObject){
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

export const singInUserService = async function(userInfo){
    try {
        const user = await findUserByEmail(userInfo.email);

        if(!user){
            throw {
                status: 404,
                message: 'User does not exist'
            }
            
        }

        const isPasswordValid = bcrypt.compare(userInfo.password, user.password);

        if (!isPasswordValid) {
            throw {
                status: 401,
                message: 'Invalid Password'
            }
        }

        const token = generateToken({
            email: user.email,
            _id: user._id,
            username: user.username
        })

        return token;

    } catch (error) {
        console.log(error);
        
    }
}

export const checkifUserExists = async function(email){
    try {
        const response = await findUserByEmail(email);
        return response;
    } catch (error) {
        console.log(error);
        
    }
}