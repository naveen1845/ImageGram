import { createUserService } from "../service/userService.js";

export async function createuser(req, res) {
    
    try {
        const userCreated = await createUserService({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
    
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: userCreated
        })
    } catch (error) {
        if (error.status) {
            return res.status(error.status).json({
                success: false,
                message: error.message,
            })
        }

        console.log(error);

        return res.status(500).json({
            success: false,
            message: 'internal server error'
        })
        
    }
}