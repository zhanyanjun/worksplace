// 这次的问题和之前的问题（HTTP 收集器）很像，也是需要使用到 http.get() 方法。然而，这一次，将有三个 URL 作为前三个命令行参数提供给你。
// 你需要收集每一个 URL 所返回的完整内容，然后将它们在终端（标准输出 stdout）打印出来。这次你不需要打印出这些内容的长度，仅仅是内容本身即可（字符串形式）；每个 URL 对应的内容为一行。重点是你必须按照这些 URL 在参数列表中的顺序将相应的内容排列打印出来才算完成。

// 不要期待这三台服务器能好好的一起玩耍！他们可能不会把完整的响应的结果按照你希望的顺序返回给你，所以你不能天真地只是在收到响应后直接打印出来，因为这样做的话，他们的顺序可能会乱掉。

// 你需要去跟踪到底有多少 URL 完整地返回了他们的内容，然后用一个队列存储起来。一旦你拥有了所有的结果，你才可以把它们打印到终端。

// 对回调进行计数是处理 Node 中的异步的基础。比起你自己去做，你会发现去依赖一个第三方的模块或者库会更方便，比如 async 或者 after。不过，在本次练习中，你应该尝试自己去解决，而不是依赖外部的模块。

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults() {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet(index) {
//   http.get(process.argv[2 + index], function(response) {
//     response.pipe(bl(function(err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }


let http = require('http');
var results = []
var count = 0

function printResults() {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet(index) {
  http.get(process.argv[2 + index], function(response) {

    let str = [];
    response.setEncoding('utf8');
    response.on('error', function(data) {
      return console.log(error);
    });
    response.on('data', function(data) {
      str += data;
    });
    response.on('end', function(data) {
      // console.log(str);
      results[index] = str;

      count++
      if (count === 3) {
        printResults()
      }
    });

  });
}
for (let i = 0; i < 3; i++) {
  httpGet(i)
}

// 异步的原因 顺序会乱掉 所以应该把收到的数据缓存到一个队列里头（数组）