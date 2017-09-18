const jsonServer = require('json-server');
const express = require('express');
const path = require('path');
const server = express();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const fs = require('fs');
const port = process.env.PORT || 3001;

server.use('/api', router);

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(path.resolve(__dirname, 'build')));
}

// Always return the main index.html, so react-router render the route in the client
server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

server.listen(port, function () {
  console.log('\x1b[36mjson-server is running on port: ' + port);
});
