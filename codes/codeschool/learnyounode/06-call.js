let filter = require('./06-module.js');

filter(process.argv[2], process.argv[3], function(err, data) {
  if (err) {
    return console.log(err);
  } else {

    for (let item of data) {
      console.log(item);
    }
  }
});

//官方答案
// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]
// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error('There was an error:', err)
//   }
//   list.forEach(function (file) {
//     console.log(file)
//   })
// })