var http = require('http');
var server = http.createServer();
server.on('request',function(request,response){
   response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    response.write('<h1>hellow</h1>');
    response.end('world');
});
server.listen(3000);
