// 编写一个 TCP 时间服务器
// 你的服务器应当监听一个端口，以获取一些 TCP 连接，这个端口会经由第一个命令行参数传递给你的程序。针对每一个 TCP 连接，你都必须写入当前的日期和24小时制的时间，如下格式：
// "YYYY-MM-DD hh:mm"
// 然后紧接着是一个换行符。
// 月份、日、小时和分钟必须用零填充成为固定的两位数：
// "2013-07-06 17:42"

let net = require('net');

var server = net.createServer(function(socket) {
  let nowtime = new Date();

  year = nowtime.getFullYear() < 10 ? '0' + nowtime.getFullYear() : nowtime.getFullYear();
  month = (nowtime.getMonth() + 1) < 10 ? '0' + (nowtime.getMonth() + 1) : (nowtime.getMonth() + 1);
  day = nowtime.getDate() < 10 ? '0' + nowtime.getDate() : nowtime.getDate();
  hours = nowtime.getHours() < 10 ? '0' + nowtime.getHours() : nowtime.getHours();
  minutes = nowtime.getMinutes() < 10 ? '0' + nowtime.getMinutes() : nowtime.getMinutes();

  let nowdate = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n';
  // "YYYY-MM-DD hh:mm"

  socket.write(nowdate);
  socket.end();
  // socket.end(newtime);
})

server.listen(process.argv[2] || 2017);


//  var net = require('net')

//  function zeroFill (i) {
//    return (i < 10 ? '0' : '') + i
//  }

//  function now () {
//    var d = new Date()
//    return d.getFullYear() + '-' +
//      zeroFill(d.getMonth() + 1) + '-' +
//      zeroFill(d.getDate()) + ' ' +
//      zeroFill(d.getHours()) + ':' +
//      zeroFill(d.getMinutes())
//  }

//  var server = net.createServer(function (socket) {
//    socket.end(now() + '\n')
//  })

//  server.listen(Number(process.argv[2]))