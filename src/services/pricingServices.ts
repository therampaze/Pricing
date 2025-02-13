import { encoding_for_model } from 'tiktoken';


export const calculateCost = (tokens: number, costPerMillion: number = 100.0, multiplier: number = 2): number => {
    return (multiplier * tokens / 1_000_000) * costPerMillion;
};
