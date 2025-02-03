import mongoose from 'mongoose';

const pricingSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    tokens: { type: Number, required: true },
    cost: { type: Number, required: true },
    isInput: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now }
});

export const PricingModel = mongoose.model('Pricing', pricingSchema);