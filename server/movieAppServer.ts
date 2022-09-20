import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from 'compression';

import api from "./endPoints";
import appconfig from "./config/appconfig";


const corsOptions = {
    // allow GET, POST, PUT, DELETE Http verbs in the server
    methods: appconfig.cors.methods,
    allowedHeaders: appconfig.cors.allowedHeaders,
    credentials: appconfig.cors.credentials,
    maxAge: appconfig.cors.maxAge,
    preflightContinue: appconfig.cors.preflightContinue,
    optionsSuccessStatus: appconfig.cors.optionsSuccessStatus,
    // allow only origins allowed by cors or our server's request
    origin: (origin: string | undefined, callback: Function) => {
        const whiteList = appconfig.cors.origin as Array<string>;
        if (whiteList.indexOf(origin as string) !== -1 || !origin)
            callback(null, true);
        else 
            callback(new Error('Not allowed by CORS'));
    }
}

// create express server
const app = express();

/* add Global Middlewars */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet());
app.use(cors(corsOptions));

// setup swapper for backend health and monitoring
// const swagger = require('../utils/swagger');


process.on('SIGINT', () => {
    console.info('stopping the server')
	process.exit();
});

app.set('port', appconfig.app.port);

// log successful request here

// setup routers
app.use(api);

// log unsuccessful requests here.

export default app;
