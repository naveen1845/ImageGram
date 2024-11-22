import express from "express"
import { CloudinaryUploader } from "../../Config/multerConfig.js";
import { createPost, findAllPostsController } from "../../Controller/postController.js";

const router = express.Router();

router.post('/', CloudinaryUploader.single('image'), createPost)

router.get('/', findAllPostsController)

export default router;