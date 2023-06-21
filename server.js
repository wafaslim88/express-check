const express = require('express');
const app = express();
const path = require('path');
const validateTime = require("./Middleware/timer");

/*// Set the view engine to Pug
app.set('view engine', 'pug');
app.set('views', './public');*/

// Middleware to verify the time of the request
app.use(validateTime);

// Serve static files from the public directory
app.use(express.static('public')); /*you are instructing Express to look for static files in the specified directory when handling incoming requests. 
Express will automatically serve the corresponding file if it exists in the specified directory.*/

// Define routes
app.get('/', (req, res) => {
    res.sendFile('/public/home.html');
  });
  
  app.get('/services', (req, res) => {
    res.send('services');
  });
  
  app.get('/contact', (req, res) => {
    res.send('contact');
  });

//Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

