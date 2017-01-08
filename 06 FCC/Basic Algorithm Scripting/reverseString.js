/*
* @Author: zxchc
* @Date:   2017-01-08 21:20:13
* @Last Modified by:   zxchc
* @Last Modified time: 2017-01-08 21:24:56
*/

'use strict';
function reverseString(str) {
  var array = str.split('');
  console.log(array);
  var strTemp = array.reverse();
  console.log(strTemp);
  str = strTemp.join('');
  console.log(str);
  return str;
}

var print = reverseString("hello");
console.log(print);
