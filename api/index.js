const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const fs = require('fs');
const port = process.env.PORT || 3001;

server.use(function(req, res, next) {
  // add 1 second delay
  setTimeout(next, 1000);
});

server.use(middlewares);
server.use(router);

server.listen(port, function () {
  console.log('\x1b[36mjson-server is running!');
});
