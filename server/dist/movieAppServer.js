"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const appconfig_1 = __importDefault(require("./config/appconfig"));
const corsOptions = {
    // allow GET, POST, PUT, DELETE Http verbs in the server
    methods: appconfig_1.default.cors.methods,
    allowedHeaders: appconfig_1.default.cors.allowedHeaders,
    credentials: appconfig_1.default.cors.credentials,
    maxAge: appconfig_1.default.cors.maxAge,
    preflightContinue: appconfig_1.default.cors.preflightContinue,
    optionsSuccessStatus: appconfig_1.default.cors.optionsSuccessStatus,
    // allow only origins allowed by cors or our server's request
    origin: (origin, callback) => {
        const whiteList = appconfig_1.default.cors.origin;
        if (whiteList.indexOf(origin) !== -1 || !origin)
            callback(null, true);
        else
            callback(new Error('Not allowed by CORS'));
    }
};
// create express server
const app = (0, express_1.default)();
/* add Global Middlewars */
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, compression_1.default)());
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)(corsOptions));
// setup swapper for backend health and monitoring
// const swagger = require('../utils/swagger');
process.on('SIGINT', () => {
    console.info('stopping the server');
    process.exit();
});
app.set('port', appconfig_1.default.app.port);
app.get("/", (req, res) => {
    res.send("I am working");
});
// log successful request here
// setup routers
// log unsuccessful requests here.
exports.default = app;
//# sourceMappingURL=movieAppServer.js.map