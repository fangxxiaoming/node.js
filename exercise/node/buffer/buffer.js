// const buf = Buffer.from('hello,world','ascii')
// console.log(buf);
// console.log(buf.toString('hex'));
// console.log(buf.toString('base64'));
// var buf = Buffer.alloc(26);
// // var len = buf.write('hello,world');
// // console.log(len);
// for(var i = 0;i < 26;i++){
//     buf[i]=i+97
// }
// console.log(buf.toString('ascii',0,6));
// const json = JSON.stringify(buf);
// console.log(json);

// var buf1 = Buffer.from('abcdefghijkl','utf8');
// console.log(buf1);
// console.log(typeof(buf1));
// var buffer1 = Buffer.from(('菜鸟教程'));
// var buffer2 = Buffer.from(('www.runoob.com'));
// var buffer3 = Buffer.concat([buffer1,buffer2]);
// console.log("buffer3 内容: " + buffer1.toString()+buffer2.toString());
var buf = Buffer.alloc(256);
len = buf.write('www.runoob.com');
console.log('写入字节'+len);