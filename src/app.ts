import express, { Request, Response } from 'express';
import { calculateCost } from './services/pricingServices';

const app = express();

app.use(express.json());

// API Route for Testing in Postman
app.post('/api/calculate', (req: Request, res: Response): void => {
    try {
        const { tokens } = req.body;

        if (tokens === undefined) {
            res.status(400).json({ error: "Tokens are required" });
            return;
        }

        const estimatedCost = calculateCost(tokens);
        res.json({ tokens, estimatedCost: estimatedCost.toFixed(6) });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

export default app;
