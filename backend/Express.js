const express = require('express');
const app = express();

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST route for form submission
app.post('/forms/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Process the data (e.g., save to database or send an email)
    console.log(`Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);

    res.status(200).json({ message: 'Form submitted successfully!' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
