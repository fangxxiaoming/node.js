var fs =require('fs');
// fs.readFile('./test.js','utf-8',function(err,data){
//     console.log(data)
// })
console.log(fs.readFileSync('./test.js','utf-8'))
console.log('aaa')