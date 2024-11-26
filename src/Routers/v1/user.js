import express from 'express'
import { createuser, signInUser } from '../../Controller/userController.js';

const router = express.Router();

router.post('/signup', createuser)

router.post('/signin', signInUser)

export default router;
