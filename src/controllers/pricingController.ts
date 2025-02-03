import { Request, Response } from 'express';
import { calculateTokens, calculateCost } from '../services/pricingServices';
import PricingModel from '../models/pricingModel';

export const calculatePricing = async (req: Request, res: Response) => {
    try {
        const { text, model, userId } = req.body;

        if (!text || !userId) {
            return res.status(400).json({ error: "Text and userId are required" });
        }

        const tokenCount = calculateTokens(text, model || 'gpt-4o');
        const estimatedCost = calculateCost(tokenCount);

        // Store usage in DB
        const usage = new PricingModel({ userId, tokens: tokenCount, cost: estimatedCost });
        await usage.save();

        res.json({ tokenCount, estimatedCost: estimatedCost.toFixed(6) });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
