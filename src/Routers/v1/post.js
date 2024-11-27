import express from "express"
import { CloudinaryUploader } from "../../Config/multerConfig.js";
import { createPost, findAllPostsController, getPostbyIdAndDeleteController, getPostbyIdAndUpdateController } from "../../Controller/postController.js";
import { isAuthenticated } from "../../Middlewares/authMiddleware.js";
import { isPostMadeBySameUser } from "../../Middlewares/getPostByIdMiddleware.js";

const router = express.Router();

router.post('/',isAuthenticated, CloudinaryUploader.single('image'), createPost)

router.get('/', findAllPostsController)

router.put('/:id', CloudinaryUploader.single('image'), getPostbyIdAndUpdateController);

router.delete('/:id',isAuthenticated, isPostMadeBySameUser ,getPostbyIdAndDeleteController)

export default router;