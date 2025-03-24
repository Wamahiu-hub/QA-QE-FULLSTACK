import { addBook, getBooks } from '@app/controllers/bookController';
import { protect } from '@app/middlewares/auth/protect';
import { adminLibrarianGuard, allUsersGuard } from '@app/middlewares/auth/role';
import express from 'express';


const router = express.Router();

router.post('/add',protect,adminLibrarianGuard,addBook)
router.get('/getbooks',protect,allUsersGuard,getBooks)

export default router;