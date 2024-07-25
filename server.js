// importing dependencies and creating server
const express = require('express');
const path = require('path');
const app = express();

const port = 3007;

//Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// Connecting routes
const apiRouter = require('./routes/apiRoutes');
const htmlRouter = require('./routes/htmlRoutes');

app.use('/api', apiRouter);
app.use('/', htmlRouter);

// listening method to connect to port 
app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`)
})