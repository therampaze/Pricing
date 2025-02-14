import { Request, Response } from "express";
import { calculateCost } from "../services/pricingServices";

export const calculatePricing = (req: Request, res: Response): void => {
    try {
        const { tokens } = req.body;

        if (!tokens) {
            res.status(400).json({ error: "Tokens are required" });
            return;
        }

        const estimatedCost = calculateCost(tokens);
        res.json({ tokens, estimatedCost: estimatedCost.toFixed(6) });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
