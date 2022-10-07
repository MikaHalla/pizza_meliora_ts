import { Router } from 'express';
import {
  orderHistory,
  sendOrder,
} from '../controllers/orderController.js';

const router = Router();

router.post('/', sendOrder);
router.get('/', orderHistory);

export default router;
