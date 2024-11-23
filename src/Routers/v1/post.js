import express from "express"
import { CloudinaryUploader } from "../../Config/multerConfig.js";
import { createPost, findAllPostsController, getPostbyIdAndDeleteController, getPostbyIdAndUpdateController } from "../../Controller/postController.js";

const router = express.Router();

router.post('/', CloudinaryUploader.single('image'), createPost)

router.get('/', findAllPostsController)

router.put('/:id', CloudinaryUploader.single('image'), getPostbyIdAndUpdateController);

router.delete('/:id' ,getPostbyIdAndDeleteController)

export default router;