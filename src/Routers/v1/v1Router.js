import express from "express"
import userRouter from "./user.js"
import postRouter from "./post.js"

const router = express.Router();

router.use('/posts', postRouter);
router.use('/user', userRouter);

export default router;