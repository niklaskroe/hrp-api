import mongoose from 'mongoose';
import logging from 'logging';

const logger = logging.default("database");

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/shoppinglistdb');
        logger.info('Connected to database container.');
    } catch (error) {
        console.error('❌ Error connecting to database: ', error);
        process.exit(1);
    }
}

function close() {
    mongoose.connection.close().then(r => {
        console.log('Database connection closed.');
    });
}

const defaultData = {};

export default {connect, close}