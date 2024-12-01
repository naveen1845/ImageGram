import express from 'express'
import { isAuthenticated } from '../../Middlewares/authMiddleware.js';
import { createLike } from '../../Controller/likeController.js';

const router = express.Router();

router.post('/', isAuthenticated, createLike)

export default router
