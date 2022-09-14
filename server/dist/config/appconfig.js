"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// config.js
const appconfig = {
    app: {
        port: process.env.DEV_APP_PORT || 8080,
        appName: process.env.APP_NAME || 'movie-app',
        env: process.env.NODE_ENV || 'development',
    },
    db: {
        database: process.env.DB_NAME || 'movie-app',
        password: process.env.DB_PASS || 'password',
        username: process.env.DB_USER || 'app',
        host: process.env.DB_HOST || '127.0.0.1',
        logging: true,
    },
    winiston: {
        logpath: '/movie-app/logs/',
    },
    auth: {
        jwt_secret: process.env.JWT_SECRET,
        jwt_expiresin: process.env.JWT_EXPIRES_IN || '30d',
        saltRounds: process.env.SALT_ROUND || 10,
        refresh_token_secret: process.env.REFRESH_TOKEN_SECRET || 'VmVyeVBvd2VyZnVsbFNlY3JldA==',
        refresh_token_expiresin: process.env.REFRESH_TOKEN_EXPIRES_IN || '2d',
        audience: process.env.JWT_AUDIENCE || "movie.app.user",
        password_regex: process.env.PASSWORD_REGEX || '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
    },
    sendgrid: {
        api_key: process.env.SEND_GRID_API_KEY,
        api_user: process.env.USERNAME,
        from_email: process.env.FROM_EMAIL || 'dmurairimukongya@gmail.com',
    },
    cors: {
        origin: ["http://localhost:3000", "https://localhost:3000"],
        methods: "GET,PUT,POST,DELETE",
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
        maxAge: 86400,
        // pass the preflight to the next request
        preflightContinue: true,
        optionsSuccessStatus: 204
    },
    helmet: {
        contentSecurityPolicy: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 
			'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 
			'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';
			upgrade-insecure-requests`,
        crossOriginEmbedderPolicy: true,
        crossOriginOpenerPolicy: "same-origin",
        crossOriginResourcePolicy: "same-origin",
        originAgentCluster: true,
        referrerPolicy: "no-referrer",
    }
};
exports.default = appconfig;
//# sourceMappingURL=appconfig.js.map