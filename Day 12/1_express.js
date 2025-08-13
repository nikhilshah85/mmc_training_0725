const express = require('express');
const path = require('path');
const app = express(); // create a new app on node 
const port = 3000; // we will serve the content on localhost:3000

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/gallary', (req, res) => {
  res.sendFile(path.join(__dirname, 'snow.jpg'));
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
