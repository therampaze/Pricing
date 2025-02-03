import { encoding_for_model } from 'tiktoken';

export const calculateTokens = (text: string, model: string = 'gpt-4o'): number => {
    try {
        const encoder = encoding_for_model('gpt-4o');
        return encoder.encode(text).length;
    } catch (error) {
        throw new Error(`Token counting failed: ${(error as Error).message}`);
    }
};

export const calculateCost = (tokens: number, costPerMillion: number = 100.0, multiplier: number = 2): number => {
    return (multiplier * tokens / 1_000_000) * costPerMillion;
};
