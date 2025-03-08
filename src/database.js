import mongoose from 'mongoose';
import logging from 'logging';

const logger = logging.default("database");

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/shoppinglistdb');
        logger.info('Connected to database container.');
    } catch (error) {
        logger.error('❌ Error connecting to database: ', error);
        process.exit(1);
    }
}

function clearDatabase() {
    return mongoose.connection.dropDatabase();
}

function close() {
    mongoose.connection.close().then(() => {
        logger.info('Database connection closed.');
    });
}

export default {connect, close}