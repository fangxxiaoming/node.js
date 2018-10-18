//  var fs = require('fs');

// fs.access('./sdsfsds.js',(mistake)=>{
//     if(mistake){
//         console.log('1'+mistake)
      
//     }
// })

// try{
//     fs.accessSync('./sfsf.js');
// }catch(err) {
//     console.log('2'+err)
// }
// var err =new Error('这是一个错误');
// throw err;
//console.log('囧囧囧'); 
var http = require('http');
var p1 = new Promise(function(resolve,reject){
    http.creatServer('www.baidu.com',function(req,res){
        if(res){
            console.log(res)
        }else{
            reject();
        }
    })
})