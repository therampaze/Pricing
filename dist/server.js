"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = require("./config/db");
const PORT = process.env.PORT || 5000;
// Connect to Database
(0, db_1.connectDB)();
app_1.default.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
