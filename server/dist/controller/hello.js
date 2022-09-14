"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroRepository = exports.RepositoryBase = exports.HeroModel = exports.HeroSchema = exports.Mixed = exports.ObjectId = exports.Schema = void 0;
const mongoose = __importStar(require("mongoose"));
exports.Schema = mongoose.Schema;
exports.ObjectId = mongoose.Schema.Types.ObjectId;
exports.Mixed = mongoose.Schema.Types.Mixed;
let schema = new exports.Schema({
    name: {
        type: String,
        required: true
    },
    power: {
        type: String,
        required: true
    },
    amountPeopleSaved: {
        type: Number,
        required: false
    },
    createdAt: {
        type: Date,
        required: false
    },
    modifiedAt: {
        type: Date,
        required: false
    }
}).pre('save', function (next) {
    if (this._doc) {
        let doc = this._doc;
        let now = new Date();
        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.modifiedAt = now;
    }
    next();
    return this;
});
exports.HeroSchema = mongoose.model('hero', schema, 'heroes', true);
class HeroModel {
    constructor(heroModel) {
        this._heroModel = heroModel;
    }
    get name() {
        return this._heroModel.name;
    }
    get power() {
        return this._heroModel.power;
    }
    get amountPeopleSaved() {
        return this._heroModel.amountPeopleSaved;
    }
    static createHero(name, power) {
        let p = new Promise((resolve, reject) => {
            let repo = new HeroRepository();
            let hero = {
                name: name,
                power: power,
                amountPeopleSaved: 0
            };
            repo.create(hero, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
        return p;
    }
    static findHero(name) {
        let p = new Promise((resolve, reject) => {
            let repo = new HeroRepository();
            repo.find({ name: name }).sort({ createdAt: -1 }).limit(1).exec((err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    if (res.length) {
                        resolve(res[0]);
                    }
                    else {
                        resolve(null);
                    }
                }
            });
        });
        return p;
    }
}
exports.HeroModel = HeroModel;
Object.seal(HeroModel);
class RepositoryBase {
    constructor(schemaModel) {
        this._model = schemaModel;
    }
    create(item, callback) {
        this._model.create(item, callback);
    }
    retrieve(callback) {
        this._model.find({}, callback);
    }
    update(_id, item, callback) {
        this._model.update({ _id: _id }, item, callback);
    }
    delete(_id, callback) {
        this._model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));
    }
    findById(_id, callback) {
        this._model.findById(_id, callback);
    }
    findOne(cond, callback) {
        return this._model.findOne(cond, callback);
    }
    find(cond, fields, options, callback) {
        return this._model.find(cond, options, callback);
    }
    toObjectId(_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }
}
exports.RepositoryBase = RepositoryBase;
class HeroRepository extends RepositoryBase {
    constructor() {
        super(exports.HeroSchema);
    }
}
exports.HeroRepository = HeroRepository;
Object.seal(HeroRepository);
let uri = 'mongodb://localhost/heroes';
mongoose.connect(uri, (err) => {
    if (err) {
        console.log(err.message);
        console.log(err);
    }
    else {
        console.log('Connected to MongoDb');
    }
});
HeroModel.createHero('Steve', 'Flying').then((res) => {
    console.log('### Created Hero ###');
    console.log(res);
    HeroModel.findHero('Steve').then((res) => {
        console.log('### Found Hero ###');
        console.log(res);
        // now update the Hero
        let hero = res;
        hero.power = 'Invisibility';
        hero.save((err, res) => {
            if (err) {
                console.log(err.message);
                console.log(err);
            }
            else {
                console.log(res);
            }
        });
    }, (err) => {
        if (err) {
            console.log(err.message);
        }
    });
}, (err) => {
    if (err) {
        console.log(err.message);
        console.log(err);
    }
});
Author;
//# sourceMappingURL=hello.js.map