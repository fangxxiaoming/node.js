var fs = require('fs');
// fs.writeFile('test.text','hello world','utf8',(err)=>{
// console.log(err)
// })
// fs.appendFile('test.text','duhanlinshishabi','utf8',(err)=>{
//     console.log(err)
//     })
fs.access('./erro',(err)=>{

})
fs.stat('./erro.js',(err,stats)=>{
    if(stats.isFile()){
        console.log('是文件');
    }
    else {
        console.log('是文件夹')
    }
})

