"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pricingRoutes_js_1 = __importDefault(require("./routes/pricingRoutes.js"));
const usageRoutes_1 = __importDefault(require("./routes/usageRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Routes
app.use('/api/pricing', pricingRoutes_js_1.default);
app.use('/api/usage', usageRoutes_1.default);
exports.default = app;
