"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRefreshToken = exports.validateUserLogin = exports.validateUserSignUp = void 0;
const joi_1 = __importDefault(require("joi"));
const appconfig_1 = __importDefault(require("../config/appconfig"));
const joi_2 = __importDefault(require("../services/joi"));
const regex_1 = require("../utils/regex");
const userSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(8).required(),
});
const userLoginSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(8).required()
});
const refreshTokenSchema = joi_1.default.object({
    token: joi_1.default.string().required()
});
const passwordValidator = (0, regex_1.validateRegex)(appconfig_1.default.auth.password_regex);
const userSchemaValidator = (0, joi_2.default)(userSchema);
const userLoginSchemaValidator = (0, joi_2.default)(userLoginSchema);
const refreshTokenSchemaValidator = (0, joi_2.default)(refreshTokenSchema);
function validateUserSignUp(req, res, next) {
    try {
        // validate user input
        const { error, value } = userSchemaValidator(req.body);
        if (error) {
            res.status(400).json(error.details);
            return;
        }
        // validate password and check if it's a strong password
        const { password } = value;
        if (!passwordValidator(password)) {
            res.status(400).json([{ message: "weak password" }]);
            return;
        }
        next();
    }
    catch (err) {
        console.error(err);
        res.status(500).json({});
    }
}
exports.validateUserSignUp = validateUserSignUp;
function validateUserLogin(req, res, next) {
    try {
        // validate user input
        const { error } = userLoginSchemaValidator(req.body);
        if (error) {
            res.status(400).json(error.details);
            return;
        }
        next();
    }
    catch (err) {
        console.error(err);
        res.status(500).json({});
    }
}
exports.validateUserLogin = validateUserLogin;
function validateRefreshToken(req, res, next) {
    try {
        // validate user input
        const { error } = refreshTokenSchemaValidator(req.body);
        if (error) {
            res.status(400).json(error.details);
            return;
        }
        next();
    }
    catch (err) {
        console.error(err);
        res.status(500).json({});
    }
}
exports.validateRefreshToken = validateRefreshToken;
//# sourceMappingURL=authMiddleware.js.map