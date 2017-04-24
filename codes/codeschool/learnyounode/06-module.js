let fs = require('fs');
let path = require('path');

module.exports = function(dirName, extName, callback) {

  let filterList = [];
  fs.readdir(dirName, function(err, list) {
    if (err) {
      return callback(err);
    } else {
      for (let item of list) {
        if (path.extname(item).slice(1) === extName) {
          // console.log(item);
          filterList.push(item);
          // filterList.push('\n');
        }
      }

      callback(null, filterList);
    }
  });
};

//官方答案
// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }