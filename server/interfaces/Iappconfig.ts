
export interface IApp {
    port: string | number,
    appName: string,
    env: string
}

export interface IDb {
	database: string,
	password: string,
	username: string,
	host: string,
	logging: boolean
} 

export interface IAuth {
	jwt_secret: string,
	jwt_expiresin: string,
	saltRounds: string | number,
	refresh_token_secret: string,
	refresh_token_expiresin: string,
	audience: string | string[],
	password_regex: string
}