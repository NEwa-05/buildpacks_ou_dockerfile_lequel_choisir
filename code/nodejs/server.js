var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) { 
        
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<!doctype html><html><head><title>hello world</title></head><body><p>Hello world from my nodejs server!</p></body>');
        res.end();
});

server.listen(8080);

console.log('starting server at port 8080...')