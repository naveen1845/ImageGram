import { isAuthenticated } from "../../Middlewares/authMiddleware.js"
import express from "express"
import { createComment, getCommentById } from "../../Controller/commentController.js"

const router = express.Router()

router.post('/', isAuthenticated, createComment)

router.get('/:id', getCommentById)

export default router