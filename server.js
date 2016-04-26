var http = require('http');
var url = require('url');
var port = process.env.PORT || 8080;

http.createServer((request, response) => {
  console.log('Incoming request to url: ', request.url);
  console.log('Request method: ', request.method);
  console.log('Request query parameters: ', url.parse(request.url, true).query);

  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({ message: 'Hello world'}));
}).listen(port);

console.log('server listening at port: ', port);