import express from 'express';
import pricingRoutes from './routes/pricingRoutes.js';
import usageRoutes from './routes/usageRoutes';

const app = express();

app.use(express.json());

// Routes
app.use('/api/pricing', pricingRoutes);
app.use('/api/usage', usageRoutes);



export default app;
