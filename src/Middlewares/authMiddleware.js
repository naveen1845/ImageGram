import { checkifUserExists } from "../service/userService.js";
import { verifyJWT } from "../Utils/jwt.js";

export async function isAuthenticated(req, res, next) {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(400).json({
            success: false,
            message: 'Token is required'
        })
    }

    try {
        const response = verifyJWT(token);

        const doesUserExist = checkifUserExists(response.email);

        if (!doesUserExist) {
            return res.status(400).json({
                success: false,
                message: 'User Does not exist'
            })
        }

        req.user = response._id

        next();
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Invalid Token'
        })
    }
}