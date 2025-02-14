"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePricing = void 0;
const pricingServices_1 = require("../services/pricingServices");
const pricingModel_1 = __importDefault(require("../models/pricingModel"));
const calculatePricing = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tokens, userId } = req.body;
        if (!tokens || !userId) {
            res.status(400).json({ error: "Tokens and userId are required" });
            return;
        }
        const estimatedCost = (0, pricingServices_1.calculateCost)(tokens);
        // Store usage in DB
        const usage = new pricingModel_1.default({ userId, tokens, cost: estimatedCost });
        yield usage.save();
        res.json({ tokens, estimatedCost: estimatedCost.toFixed(6) });
    }
    catch (error) {
        next(error); // Pass error to Express error handler
    }
});
exports.calculatePricing = calculatePricing;
