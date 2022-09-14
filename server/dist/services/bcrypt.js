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
const appconfig_1 = __importDefault(require("../config/appconfig"));
class Bcrypt {
    constructor(saltRound) {
        this.saltRound = saltRound;
    }
    hash(plainText, saltRound) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcrypt_1.default.hash(plainText, saltRound || this.saltRound);
        });
    }
    compare(plainText, hashedText) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcrypt_1.default.compare(plainText, hashedText);
        });
    }
}
exports.default = new Bcrypt(appconfig_1.default.auth.saltRounds);
//# sourceMappingURL=bcrypt.js.map