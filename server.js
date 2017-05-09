'use strict';

const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');

// Use the built-in express middleware for serving static files from './public'
app.use(express.static(path.join(__dirname, './')));

app.get('/', (req, res) => {
  res.render('index.html');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});