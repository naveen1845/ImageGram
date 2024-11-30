import express from "express"
import userRouter from "./user.js"
import postRouter from "./post.js"
import commentRouter from "./comment.js"

const router = express.Router();

router.use('/posts', postRouter);
router.use('/user', userRouter);
router.use('/comments', commentRouter)

export default router;