// var events = require('events');
// var eventEmitter = new events.EventEmitter();
var eventEmitter = require('events').EventEmitter;
var event = new eventEmitter();
event.on('some_event',()=>{
    console.log('some_event事件触发')
});
setTimeout(()=>{
    event.emit('some_event')
},1000)
//console.log(navigator.userAgent);
