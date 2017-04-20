var http = require('http');


http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("Let's get it started!!\n")
}).listen(3030, 'localhost');
console.log('Server is running...')