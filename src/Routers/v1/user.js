import express from 'express'
import { createuser, signInUser } from '../../Controller/userController.js';

const router = express.Router();

/**
 * @swagger
 * /user/signup:
 *  post:
 *      summary: create a new user
 *      discription: create a new user
 */
router.post('/signup', createuser)

router.post('/signin', signInUser)

export default router;
