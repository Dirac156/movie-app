"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegex = void 0;
const validateRegex = (expression) => {
    const regularExpression = new RegExp(expression);
    return (str) => {
        return str.match(regularExpression);
    };
};
exports.validateRegex = validateRegex;
//# sourceMappingURL=regex.js.map