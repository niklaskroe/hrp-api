import express from 'express'
import favicon from 'serve-favicon';
import dotenv from 'dotenv';
import logging from 'logging';
import process from 'node:process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import url from 'node:url';

import db from "./database.js";
import routes from './routes/routes.js';

dotenv.config();

const config = {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 8080,
}

const logger = logging.default("main");

const app = express();

/**
 * @description logging used method and url
 */
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
logger.info(__dirname + ' ' + __filename);

const sourceDir = path.dirname(url.fileURLToPath(import.meta.url));
const staticDir = path.join(sourceDir, "..", "static");

app.use(express.static(staticDir));

app.use(express.json());
app.use(favicon(path.join(__dirname, '../public/kitchen.svg')));
app.use(routes);

db.connect().then(() => logger.info("Database connected."));

const server = app.listen(config.port, config.host, () => {
    logger.info(`Server listening on http://${config.host}:${config.port}`);
});

process.on("SIGTERM", () => {
    logger.info("SIGTERM received. Closing Server.");
    db.close();
    server.close();
});

process.on("SIGINT", () => {
    logger.info("\nSIGINT received. Closing Server.");
    db.close();
    server.close();
});