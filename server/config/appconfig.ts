import { CorsOptions } from "cors";
import { config } from "dotenv";
import { HelmetOptions } from "helmet";
import { ContentSecurityPolicyOptions } from "helmet/dist/types/middlewares/content-security-policy";
import { CrossOriginOpenerPolicyOptions } from "helmet/dist/types/middlewares/cross-origin-opener-policy";
import { CrossOriginResourcePolicyOptions } from "helmet/dist/types/middlewares/cross-origin-resource-policy";
import { ReferrerPolicyOptions } from "helmet/dist/types/middlewares/referrer-policy";
config();

// config.js
const appconfig: {
	app: {
		port: string | number,
		appName: string,
		env: string
	},
	db: {},
	winiston: {},
	auth: {},
	sendgrid: {},
	cors: CorsOptions,
	helmet: HelmetOptions
} = {
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
		refresh_token_expiresin: process.env.REFRESH_TOKEN_EXPIRES_IN || '2d', // 2 days
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
		contentSecurityPolicy: 
			`default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 
			'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 
			'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';
			upgrade-insecure-requests` as ContentSecurityPolicyOptions,
		crossOriginEmbedderPolicy: true,
		crossOriginOpenerPolicy: "same-origin" as CrossOriginOpenerPolicyOptions,
		crossOriginResourcePolicy: "same-origin" as CrossOriginResourcePolicyOptions,
		originAgentCluster: true,
		referrerPolicy: "no-referrer" as ReferrerPolicyOptions,
	}
};


export default appconfig;