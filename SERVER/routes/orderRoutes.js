import { Router } from 'express';
import {
  orderHistory,
  sendOrder,
} from '../controllers/orderController.js';
import protectedRoute from '../middleware/authMiddleware.js';

const router = Router();

router.post('/', protectedRoute, sendOrder);
router.get('/', protectedRoute, orderHistory);

export default router;
