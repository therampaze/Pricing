import { Request, Response } from 'express';
import { calculateCost } from '../services/pricingServices';
import PricingModel from '../models/pricingModel';

export const calculatePricing = async (req: Request, res: Response) => {
    try {
        const { tokens, userId } = req.body;

        if (!tokens || !userId) {
            return res.status(400).json({ error: "Tokens and userId are required" });
        }

        const estimatedCost = calculateCost(tokens);

        // Store usage in DB
        const usage = new PricingModel({ userId, tokens, cost: estimatedCost });
        await usage.save();

        res.json({ tokens, estimatedCost: estimatedCost.toFixed(6) });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
