import jwt from "jsonwebtoken"
import { JWT_SECRET_KEY } from "../Config/serverConfig.js"

export const generateToken = (payload) => {
    const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1d'});

    return token;
}

export const verifyJWT = (token) => {
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    console.log("decoded : " + decoded);
    return decoded;
}
