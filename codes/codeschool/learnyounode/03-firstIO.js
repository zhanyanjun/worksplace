//打印出传入文件的行数（同步方式）

// let fs = require('fs');
// let buf = require('buffer');
// let path = process.argv[1];
// console.log(path);
// buf = fs.readFileSync(path);
// let arr = buf.toString().split(''); //文件内容转成字符串再提取到数组中
// let rows = arr.filter(function(value) {
//   return value === '\n';
// });
// console.log(rows.length);


// 这道题官方的答案出错了吧
// 以下是官方答案
var fs = require('fs');
var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split('\n').length - 1; //这里没有必要-1
console.log(lines);
// 只要把'utf8'作为readFileSync的第二个参数传入就可以不用.toString()来得到一个字符串
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;