"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const payloadValidator = (schema) => (payload) => schema.validate(payload, { abortEarly: false });
exports.default = payloadValidator;
//# sourceMappingURL=joi.js.map