const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Dummy endpoint for login (Replace with real logic)
app.post('/login', (req, res) => {
    // Handle login logic
    res.send('Login logic here');
});

// Dummy endpoint for registration (Replace with real logic)
app.post('/register', (req, res) => {
    // Handle registration logic
    res.send('Registration logic here');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
