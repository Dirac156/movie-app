"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = __importDefault(require("../controller/authController"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const authRouter = (0, express_1.Router)();
authRouter.post("/login", authMiddleware_1.validateUserLogin, authController_1.default.login);
authRouter.post("/signup", authMiddleware_1.validateUserSignUp, authController_1.default.signUp);
exports.default = authRouter;
//# sourceMappingURL=authEndpoint.js.map