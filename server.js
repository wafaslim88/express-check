const express = require('express');
const app = express();
const path = require('path');
const validateTime = require("./Middleware/timer");

// Middleware to verify the time of the request
app.use(validateTime);

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public'))); /*you are instructing Express to look for static files in the specified directory when handling incoming requests. 
Express will automatically serve the corresponding file if it exists in the specified directory.*/

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});




