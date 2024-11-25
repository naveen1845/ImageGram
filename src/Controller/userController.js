import { createUserService } from "../service/userService.js";

export async function createuser(req, res) {
    console.log(req.body);
    
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
}