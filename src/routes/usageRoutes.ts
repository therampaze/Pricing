import express from 'express';
import { getUserUsage } from '../controllers/usagecontroller';

const router = express.Router();

router.get('/:userId', getUserUsage);

export default router;
