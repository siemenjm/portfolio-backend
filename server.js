// Import dependencies
const express = require('express');
const cors = require('cors');

// Import JSON files
const about = require('./about.json');
const projects = require('./projects.json');

// Create our app object
const app = express();

// Set up middleware
app.use(cors());

// Routes -----
// GET ROUTES
// Home route for testing our app
app.get('/', (req, res) => {
    res.send('Hello World');
});

// retrieve about info
app.get('/about', (req, res) => {
    res.json(about);
});

// retrieve projects
app.get('/projects', (req, res) => {
    res.json(projects);
});

// Port and listen
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));