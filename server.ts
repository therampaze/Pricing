import * as dotenv from 'dotenv';
dotenv.config();

import app from './app';
import { createServer } from 'http';
import mongoose from 'mongoose';

const server = createServer(app);
const PORT = process.env.PORT || 8003;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/pricingDB')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Graceful shutdown
const gracefulShutdown = () => {
    console.log('Received shutdown signal. Closing server...');
    server.close((err) => {
        if (err) {
            console.error('Error during shutdown:', err);
            process.exit(1);
        }
        console.log('Server closed successfully');
        mongoose.connection.close();
        process.exit(0);
    });

    setTimeout(() => {
        console.error('Forcefully shutting down...');
        process.exit(1);
    }, 30000);
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

server.listen(PORT, () => {
    console.log(`🚀 Pricing API running on port ${PORT}`);
    console.log(`Health check available at http://localhost:${PORT}/health`);
});
