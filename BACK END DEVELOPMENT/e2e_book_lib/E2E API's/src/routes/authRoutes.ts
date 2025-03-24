import { loginUser, logoutUser, registerUser } from '@app/controllers/AuthControllers';
import express from 'express';


const router = express.Router();
//public routes
router.post('/register',registerUser )
router.post('/login',loginUser )
router.post('/logout',logoutUser)

export default router;