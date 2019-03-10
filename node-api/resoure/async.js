//通过process.nextTick封装async异步函数
// var async = function (callback){
//     process.nextTick(callback);
// }
// async(function(){
//     console.log(123);
// })
// console.log(111);

// var async = function (callback) {
//     process.nextTick(function() {
//         var results = something;
//         if(error) {
//             return callback(error);
//         }
//         callback(null,results)
//     });
// };
// var events = require('events');
// var emitter =  new events.EventEmitter();
// emitter.on('event1',function(message){
//     console.log(message)
// });
// emitter.emit('event1',"this is a message");
var http = require('http');

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/upload',
    method: 'POST'
}
var req = http.request(options,function(res){
    console.log('STATUS' +res.statusCode);
    console.log('HEADERS'+JSON.stringify(res.headers))
})