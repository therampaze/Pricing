"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PricingSchema = new mongoose_1.default.Schema({
    userId: { type: String, required: true },
    tokens: { type: Number, required: true },
    cost: { type: Number, required: true }
}, { timestamps: true });
const PricingModel = mongoose_1.default.model('Pricing', PricingSchema);
exports.default = PricingModel;
