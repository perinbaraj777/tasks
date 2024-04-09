const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware for parsing JSON request body
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Custom logging middleware
app.use((req, res, next) => {
    const logStream = fs.createWriteStream(path.join(__dirname, 'logs', 'access.log'), { flags: 'a' });
    logStream.write(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}\n`);
    logStream.end();
    next();
});

// Route to trigger an error
app.get('/error', (req, res, next) => {
    // Simulate an error
    next(new Error('Intentional Error'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port number ${PORT}`);
});
