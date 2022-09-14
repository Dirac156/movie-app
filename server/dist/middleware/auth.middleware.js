"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserSignUp = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_2 = __importDefault(require("../services/joi"));
const userSchema = joi_1.default.object({
    name: joi_1.default.string().min(1).required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(8).required(),
});
const userSchemaValidator = (0, joi_2.default)(userSchema);
function validateUserSignUp(req, res, next) {
    try {
        // validate user input
        const { error, value } = userSchemaValidator(req.body);
        console.log(error);
        console.log(value);
        next();
    }
    catch (err) {
        console.error(err);
        res.status(500).json({});
    }
}
exports.validateUserSignUp = validateUserSignUp;
//# sourceMappingURL=auth.middleware.js.map