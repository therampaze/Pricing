"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCost = void 0;
const calculateCost = (tokens, costPerMillion = 100.0, multiplier = 2) => {
    return (multiplier * tokens / 1000000) * costPerMillion;
};
exports.calculateCost = calculateCost;
