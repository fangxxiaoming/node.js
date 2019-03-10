process.nextTick(function () {
    console.log('nextTick延迟进行')
})
setTimeout(function () {
    console.log('定时器延迟')
},0);