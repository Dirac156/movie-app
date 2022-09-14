"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const appconfig_1 = __importDefault(require("../config/appconfig"));
const userschema = new mongoose_1.Schema({
    name: {
        type: String,
        index: true,
        required: true,
        minlength: [1, 'Must Have at least 1 character'],
        maxlength: [25, 'Must have at most 25 characters']
        // check if this is a valid name
    },
    email: {
        type: String,
        index: true,
        required: true,
        minlength: [3, 'Must have at least 3 characters'],
        maxlength: [25, 'Must have at most 25 characters']
        // check if this is a valid email address
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Must have at least 8 characters'],
        maxlength: [40, 'Must have at most 40 characters'],
        validate: {
            validator: (str) => {
                return new RegExp(appconfig_1.default.auth.password_regex).test(str);
            },
            message: props => `${props.value} is not a valid password!`
        }
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('user', userschema);
//# sourceMappingURL=user.model.js.map