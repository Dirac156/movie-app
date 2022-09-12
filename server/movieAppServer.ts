import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from 'compression';
import * as uuid from 'uuid';

import config from './config/appconfig';

// create express server
const app = express();

/* add Global Middlewars */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet());
app.use(cors());

// setup swapper for backend health and monitoring
// const swagger = require('../utils/swagger');


process.on('SIGINT', () => {
    console.info('stopping the server')
	process.exit();
});

app.set('port', config.app.port);

// log successful request here

// setup routers

// log unsuccessful requests here.


export default app;
