import express from 'express';
import {signup,login,logout, authCheck} from '../controllers/auth.controllers.js';
const router = express.Router();
import {protectRoute} from '../middleware/protectRoute.js'

router.post('/signup',signup);
router.post('/login',login);
router.post('/logout', logout);

router.get('/authCheck', protectRoute,authCheck);

export default router;