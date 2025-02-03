import express from 'express';
import { calculatePricing } from '../controllers/pricingController';

const router = express.Router();

router.post('/', calculatePricing);

export default router;
