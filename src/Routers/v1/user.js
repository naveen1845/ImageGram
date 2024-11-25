import express from 'express'
import { createuser } from '../../Controller/userController.js';

const router = express.Router();

router.post('/signup', createuser)

export default router;
