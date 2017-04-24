// 编写一个 HTTP 服务器，每当接收到一个路径为 '/api/parsetime' 的 GET 请求的时候，响应一些 JSON 数据。我们期望请求会包含一个查询参数（query string），key 是 "iso"，值是 ISO 格式的时间。

// 如:

// /api/parsetime?iso=2013-08-10T12:10:15.474Z

// 所响应的 JSON 应该只包含三个属性：'hour'，'minute' 和 'second'。例如：

// {
//   "hour": 14,
//   "minute": 23,
//   "second": 15
// }
// 然后增再加一个接口，路径为 '/api/unixtime'，它可以接收相同的查询参数（query string），但是它的返回会包含一个属性：'unixtime'，相应值是一个 UNIX 时间戳。例如:

// { "unixtime": 1376136615474 }
// 你的服务器需要监听第一个命令行参数所指定的端口。



let url = require('url');
var http = require('http')

function parsetime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime(time) {
  return {
    unixtime: time.getTime()
  }
}


var server = http.createServer(function(req, res) {

  let parseUrl = url.parse(req.url, true);
  let time = new Date(parseUrl.query.iso);
  let result;

  if (parseUrl.pathname === '/api/parsetime') {
    result = parsetime(time)
  }

  if (parseUrl.pathname === '/api/unixtime') {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(Number(process.argv[2]) || 2017);


// require('url').parse('/test?q=1', true)
//  protocol: null,
//  slashes: null,
//  auth: null,
//  host: null,
//  port: null,
//  hostname: null,
//  hash: null,
//  search: '?q=1',
//  query: { q: '1' },
//  pathname: '/test',
//  path: '/test?q=1',
//  href: '/test?q=1'

// 官方
// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime: time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))