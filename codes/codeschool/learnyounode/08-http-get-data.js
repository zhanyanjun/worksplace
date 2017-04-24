let http = require('http');

http.get(process.argv[2], function(response) {

  let str = [];

  response.setEncoding('utf8');

  response.on('error', function(data) {
    return console.log(error);
  });

  response.on('data', function(data) {

    str += data;

    // return console.log(data);
  });

  response.on('end', function(data) {
    console.log(str.length);
    console.log(str);
  });

});




//  var http = require('http')
//  var bl = require('bl')

//  http.get(process.argv[2], function (response) {
//    response.pipe(bl(function (err, data) {
//      if (err) {
//        return console.error(err)
//      }
//      data = data.toString()
//      console.log(data.length)
//      console.log(data)
//    }))
//  })