"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const baseController_1 = __importDefault(require("./baseController"));
const user_model_1 = __importDefault(require("../model/user/user.model"));
class AuthControllerClass extends baseController_1.default {
    Login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    /**
     * SignUp create new user and save user into the database
     * @param req
     * @param res
     * @returns The user created | Null in case nothing was created.
     */
    SignUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                if (yield this.findOne({ email })) {
                    res.status(200).json({ message: "user already exist" });
                    return;
                }
                // generate user
                const hashedPassword = yield bcrypt_1.default.hash(password, 10);
                yield this.create({ name, email, password: hashedPassword });
                return res.status(201).json({ message: "new user created!" });
            }
            catch (err) {
                console.error(err);
                return res.status(500).json({});
            }
        });
    }
}
;
exports.default = new AuthControllerClass(user_model_1.default);
//# sourceMappingURL=auth.controller.js.map