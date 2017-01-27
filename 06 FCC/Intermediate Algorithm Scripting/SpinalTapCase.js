/*
 * @Author: Archer
 * @Date:   2017-01-25 23:43:04
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-27 11:37:18
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 * [将字符串转换为 spinal case。
 * Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，
 * 也就是以连字符连接所有小写单词。]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var letters = str.split("");
  console.log(letters);
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] === "-") {
      continue;
    }
    if (letters[i] === " " || letters[i] === "_") {
      letters[i] = "-";
    } else if (letters[i] === letters[i].toUpperCase()) {
      if (i === 0) {
        letters[i] = letters[i].toLowerCase();
      } else if (i !== 0 && letters[i - 1] === "-") {
        letters[i] = letters[i].toLowerCase();
      } else {
        let toReplace = "-" + letters[i].toLowerCase();
        letters[i] = toReplace;
      }

    }
  }
  var result = letters.join("");
  console.log(result);
  return result;


}

spinalCase('T-His-Is Spinal Tap');
