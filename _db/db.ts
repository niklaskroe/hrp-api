import mongoose from 'mongoose';

const mdb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/hrp-db');
        console.log('✅ Connected to database container');
    } catch (error) {
        console.error('❌ Error connecting to database: ', error);
        process.exit(1);
    }
};

export default mdb;