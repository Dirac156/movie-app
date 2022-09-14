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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const appconfig_1 = __importDefault(require("../config/appconfig"));
class JWTClass {
    constructor(secret, expiresIn, refreshTokenSecret, refreshTokenExpiresIn, audience) {
        this.secret = secret;
        this.expiresIn = expiresIn;
        this.refreshTokenSecret = refreshTokenSecret;
        this.refreshTokenExpiresIn = refreshTokenExpiresIn;
        this.audience = audience;
    }
    sign(data, time, audience) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield jsonwebtoken_1.default.sign(data, this.secret, {
                algorithm: "HS256",
                expiresIn: time || this.expiresIn,
                audience: audience || this.audience,
                issuer: "movie.app"
            });
        });
    }
    verify(token) {
        return jsonwebtoken_1.default.verify(token, this.secret);
    }
}
exports.default = new JWTClass(appconfig_1.default.auth.jwt_secret, appconfig_1.default.auth.jwt_expiresin, appconfig_1.default.auth.refresh_token_secret, appconfig_1.default.auth.refresh_token_expiresin, appconfig_1.default.auth.audience);
//# sourceMappingURL=jsonwebtoken.js.map