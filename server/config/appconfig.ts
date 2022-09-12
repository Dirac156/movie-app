import { config } from "dotenv";
config();

// config.js
export default {
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

};
