"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("../controller/auth.controller"));
const auth_middleware_1 = require("../middleware/auth.middleware");
const authRouter = (0, express_1.Router)();
authRouter.post("/login", auth_controller_1.default.Login);
authRouter.post("/signup", auth_middleware_1.validateUserSignUp, auth_controller_1.default.SignUp);
exports.default = authRouter;
//# sourceMappingURL=auth.endpoint.js.map