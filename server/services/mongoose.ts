import mongoose from "mongoose";
import appconfig from "../config/appconfig";

const { database, username, password, host } = appconfig.db;

export async function connecToDb() {
    await mongoose.connect(
        `mongodb+srv://${username}:${password}@${host}/${database}?retryWrites=true&w=majority`
    )
}

export async function disconnectDatabase() {
    await mongoose.disconnect();
}

mongoose.connection.once('connected', () => {
    console.info(`successfully connected to the database`);
});

mongoose.connection.once('connecting', () => {
    console.info(`connecting to database...`);
});

mongoose.connection.on('error', (err) => {
    console.error(`database error: ${err}`);
});

mongoose.connection.once('disconnecting', () => {
    console.info(`disconnecting the database...`)
});

mongoose.connection.once('disconnected', () => {
    console.info(`Database disconnected`);
})