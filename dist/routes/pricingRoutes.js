"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pricingController_1 = require("../controllers/pricingController");
const router = express_1.default.Router();
router.post("/", (req, res, next) => (0, pricingController_1.calculatePricing)(req, res, next));
exports.default = router;
