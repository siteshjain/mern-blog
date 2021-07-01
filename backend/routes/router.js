import express from 'express';

import {getPosts,createPost,updatePost,deletePost,likePost,readPost} from '../controllers/posts.js'
import auth from '../middlewar/middlewar.js'
const router=express.Router();



router.get('/',getPosts)


router.post('/new',auth,createPost)

router.patch('/:id',auth,updatePost)

router.delete('/:id',auth,deletePost)

router.patch('/:id/likePost',auth,likePost)


router.get('/:id',auth,readPost)

export default router