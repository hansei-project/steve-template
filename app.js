const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

console.log('hi')

const server = http.createServer( (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
});

server.listen(port, hostname, () => {
    console.log('Listening server at ' + hostname + ':' + port);
});