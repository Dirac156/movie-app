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
Object.defineProperty(exports, "__esModule", { value: true });
class BaseController {
    /**
     * _findById: Search the database to find the first document with a matching _id.
     * @param _id: The unique identifier of an object
     * @param modelName: Referrencing the collection of documents.
     * @returns The data found on the database or null when the data is missing
     */
    static _findById(_id, modelName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield modelName.findById(_id);
        });
    }
    static _findOne(filter, modelName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield modelName.findOne(filter);
        });
    }
    static _create(data, modelName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield modelName.create(data);
        });
    }
}
exports.default = BaseController;
;
//# sourceMappingURL=baseController.js.map