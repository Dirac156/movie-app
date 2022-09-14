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
const user_model_1 = __importDefault(require("../model/user.model"));
class AuthController extends baseController_1.default {
    /**
     * Authenticate a user into the system
     * @param req
     * @param res
     * @returns
     */
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const user = yield AuthController._findOne({ email }, user_model_1.default);
                if (!user)
                    return res.status(401).json({ message: "Authentification failed! User doesn't exist" });
                if (!(yield bcrypt_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password)))
                    return res.status(401).json({ message: "Autentification failed!" });
                // generate jwt token for 30 days
                res.status(200).json({ message: "Authentifiation was successful", data: user });
            }
            catch (err) {
                console.error(err);
                return res.status(500).json({});
            }
        });
    }
    /**
     * create new user and save user into the database
     * @param req
     * @param res
     * @returns The user created | Null in case nothing was created.
     */
    static signUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                if (yield AuthController._findOne({ email }, user_model_1.default))
                    return res.status(400).json({ message: "user already exist" });
                // generate user
                const hashedPassword = yield bcrypt_1.default.hash(password, 10);
                yield AuthController._create({ name, email, password: hashedPassword }, user_model_1.default);
                return res.status(201).json({ message: "new user created!" });
            }
            catch (err) {
                console.error(err);
                return res.status(500).json({});
            }
        });
    }
}
exports.default = AuthController;
;
//# sourceMappingURL=authController.js.map