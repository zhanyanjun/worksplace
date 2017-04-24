//打印出传入文件的行数（异步方式）

let fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
  if (err) {
    return console.log(err);
  } else {
    console.log(data.toString().split('\n').length - 1);
  }
});
//可以传入'utf8'直接拿到字符串