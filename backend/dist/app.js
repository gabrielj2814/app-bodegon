"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, "../.env") });
const { PORT, NODE_ENV } = process.env;
const app = (0, express_1.default)();
// set
app.set("port", PORT || 5000);
// middliware
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.resolve(__dirname, "../public")));
// routes
exports.default = app;
