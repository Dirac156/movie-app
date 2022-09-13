
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