//Node.js中常用的异常处理方式
// 每秒钟打印一次时间，确保程序没有奔溃
(function loop() {
    console.log(new Date().getTime())
    setTimeout(function() {
        loop()
    }, 1000)
})()
// 模拟同步代码块内出现异常
let syncError = () => {
        throw new Error('Sync Error')
    }
    // 模拟异步代码块内出现异常
let asyncError = () => {
        setTimeout(function() {
            throw new Error('Async Error')
        }, 100)
    }
    //1、try catch 方式
try {
    syncError()
} catch (e) {
    /*处理异常*/
    console.log(e.message)
}
//console.log('异常被捕获了，我可以继续执行')
//但是try catch方式无法处理异步代码块内出现的异常，你可以理解为执行catch时，异常还没有发生。

try {
    asyncError()
} catch (e) {
    /*异常无法被捕获,导致进程退出*/
    console.log(e.message)
}

//2、callback方式
fs.mkdir('/dir', function(e) {
        if (e) {
            /*处理异常*/
            console.log(e.message)
        } else {
            console.log('创建目录成功')
        }
    })
    //3、event 方式
let events = require("events");
//创建一个事件监听对象
let emitter = new events.EventEmitter();
//监听error事件
emitter.addListener("error", function(e) {
    /*处理异常*/
    console.log(e.message)
});
//触发error事件
emitter.emit("error", new Error('出错啦'));
//4、Promise 方式
new Promise((resolve, reject) => {
        syncError()
            /* or
            try{
                syncError()
            }catch(e){
                reject(e)
            }
            */
    })
    .then(() => {
        //...
    })
    .catch((e) => {
        /*处理异常*/
        console.log(e.message)
    })