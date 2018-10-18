var net = require('net');
var server = net.createServer(function (socket){
socket.write('ECHO server');
socket.pipe(socket)
}).listen(3001,'127.0.0.1');