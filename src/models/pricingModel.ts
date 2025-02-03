import mongoose from 'mongoose';

const PricingSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    tokens: { type: Number, required: true },
    cost: { type: Number, required: true }
}, { timestamps: true });

const PricingModel = mongoose.model('Pricing', PricingSchema);
export default PricingModel;
