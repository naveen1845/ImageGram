import express from "express"
import { CloudinaryUploader } from "../../Config/multerConfig.js";
import { createPost } from "../../Controller/postController.js";

const router = express.Router();

router.post('/', CloudinaryUploader.single('image'), createPost)

export default router;