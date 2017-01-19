/*
 * @Author: Archer
 * @Date:   2017-01-19 21:42:50
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-19 23:12:48
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 * [从传递进来的字母序列中找到缺失的字母并返回它。]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function fearNotLetter(str) {
  var letters = str.split("");
  var letterCode = [];
  for (var i = 0; i < letters.length; i++) {
    letterCode.push(letters[i].charCodeAt(0));
  }
  console.log(letterCode);
  var start = letterCode[0];
  var resPos = 0;
  for (var i = 1; i < letterCode.length; i++) {
    if (++start != letterCode[i]) {
      resPos = start;
      break;
    }

  }

  console.log(String.fromCharCode(resPos));
  if (!resPos) {
    return undefined;
  }
  return String.fromCharCode(resPos);
}

fearNotLetter("abce");
