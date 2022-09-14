"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authEndpoint_1 = __importDefault(require("./authEndpoint"));
const api = (0, express_1.Router)();
api.use("/auth", authEndpoint_1.default);
api.get("/", (req, res) => {
    res.status(200).json({
        status: true
    });
});
exports.default = api;
//# sourceMappingURL=index.js.map