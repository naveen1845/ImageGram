import express from "express"
import { CloudinaryUploader } from "../../Config/multerConfig.js";
import { createPost, findAllPostsController, getPostbyIdAndDeleteController, getPostbyIdAndUpdateController } from "../../Controller/postController.js";
import { isAuthenticated } from "../../Middlewares/authMiddleware.js";
import { isPostMadeBySameUser } from "../../Middlewares/getPostByIdMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     description: Create a new post with an image
 *     tags:
 *       - Posts
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *               caption:
 *                 type: string
 *     responses:
 *       201:
 *         description: Post created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/',isAuthenticated, CloudinaryUploader.single('image'), createPost)

/**
 * @swagger
 * /posts:
 *  get:
 *      summary: Returns all the posts
 *      discription: Returns all the posts
 *      tags:
 *          - Posts
 */
router.get('/', findAllPostsController)

router.put('/:id', CloudinaryUploader.single('image'), getPostbyIdAndUpdateController);

router.delete('/:id',isAuthenticated ,getPostbyIdAndDeleteController)

export default router;