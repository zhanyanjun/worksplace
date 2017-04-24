let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req, res) {

  let upperCase = [];

  if (req.method !== 'POST') {
    return res.end('I just process post request!\n')
  }

  res.writeHead(200, { 'content-type': 'text/plain' });

  req.on("data", function(data) {
    upperCase.push(data.toString().toUpperCase());
  });

  req.on("end", function(data) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    // res.write(upperCase.toString());

    for (let i = 0; i < upperCase.length; i++) {
      res.write(upperCase[i]);
    }
  });
});

server.listen(process.argv[2] || 2017);


// var map = require('through2-map')
// inStream.pipe(map(function (chunk) {
//   return chunk.toString().split('').reverse().join('')
// })).pipe(outStream)

// 从 inStream 传进来的数据会被转换成字符串（如果它不是字符串的话），并且字符会反转处理，然后传入 outStream。所以，我们这里是做了一个字符串反转器！记住！尽管，数据块（chunk）的大小是由上游（up-stream）所决定的，但是你还是可以在这之上对传进来的数据做一点小小的处理的。

// 官方

// var http = require('http')
// var map = require('through2-map')

// var server = http.createServer(function (req, res) {
//   if (req.method !== 'POST') {
//     return res.end('send me a POST\n')
//   }

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))