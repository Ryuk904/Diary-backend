import express from 'express';
import { requireAuth } from '../middleware/auth.js'
import {
    getAllPosts,
    getPost,
    createPost,
    deletePost,
    updatePost
} from '../controllers/postControllers.js'

const router = express.Router();
router.use(requireAuth); //this authorization will run every time we hit a route


router.get('/', getAllPosts);
router.get('/:id', getPost);
router.post('/', createPost);
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);

export default router;