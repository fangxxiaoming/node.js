var fs = require('fs');
var ws = fs.createWriteStream('test.txt','utf8');
ws.write('写入流测试');
ws.write('END');
ws.end();
var ws2 = fs.createWriteStream('test.txt','utf8');
ws2.write(new Buffer('写入二进制数据','utf8'));
ws2.write(new Buffer('END.', 'utf-8'));
ws2.end();