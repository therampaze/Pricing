import express from 'express';
import cors from 'cors';
import { encoding_for_model } from 'tiktoken';
import { PricingModel } from './models/pricingModel';

const app = express();
app.use(cors());
app.use(express.json());

// Function to calculate token count
const calculateTokens = (text: string, model: string = 'gpt-4o'): number => {
    try {
        const encoder = encoding_for_model('gpt-4o');  // Ensuring that we use GPT-4o
        return encoder.encode(text).length;
    } catch (error) {
        throw new Error(`Token counting failed: ${(error as Error).message}`);
    }
};

// Function to calculate cost
const calculateCost = (tokens: number, costPerMillion: number = 100.0, multiplier: number = 2): number => {
    return (multiplier * tokens / 1_000_000) * costPerMillion;
};

// API to calculate pricing
app.post('/api/pricing', async (req, res) => {
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
});

// API to get user usage
app.get('/api/usage/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const usageData = await PricingModel.find({ userId });

        res.json({ userId, usage: usageData });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: "OK", message: "Pricing API is running" });
});

export default app;
