const express = require('express');
const { Client } = require('pg'); // PostgreSQL client

const app = express();
const port = process.env.PORT || 3000;

// Connect to Azure SQL Database (PostgreSQL for simplicity)
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();

// Middleware
app.use(express.json());

// Basic route to get classes
app.get('/classes', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM classes');
        res.json(result.rows);
    } catch (err) {
        res.status(500).send('Error fetching classes');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
