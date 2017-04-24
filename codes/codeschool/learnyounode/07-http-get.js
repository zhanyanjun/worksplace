let http = require('http');

http.get(process.argv[2], function(response) {

  response.setEncoding('utf8');

  response.on('error', function(data) {
    return console.log(error);
  });

  response.on('data', function(data) {
    return console.log(data);
  });

  response.on('end', function(data) {
    // return console.log('end');
  });

});

// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)