const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();

// Enable CORS for frontend requests (adjust origin as needed)
app.use(cors({
    origin: 'http://127.0.0.1:5500', // Change this to your frontend URL if different
    methods: ['GET', 'POST'],
}));

// Middleware to parse incoming JSON data
app.use(bodyParser.json());  // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));  // For parsing application/x-www-form-urlencoded

// POST route for handling contact form submission
app.post('/forms/contact', (req, res) => {
    console.log(req.body); // Log the body to ensure it's being parsed correctly
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    console.log(`Received contact form submission:
        Name: ${name}
        Email: ${email}
        Message: ${message}`);

    res.status(200).json({ success: 'Form submitted successfully.' });
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
