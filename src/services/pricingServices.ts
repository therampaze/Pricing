import { encoding_for_model } from 'tiktoken';


export const calculateCost = (tokens: number): number => {
    return 0.04 * tokens;
};


