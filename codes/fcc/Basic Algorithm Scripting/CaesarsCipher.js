/*
 * @Author: Archer
 * @Date:   2017-01-10 12:14:48
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-10 14:11:38
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 * 移位密码也就是密码中的字母会按照指定的数量来做移位。
 * 一个常见的案例就是ROT13密码，字母会移位13个位置。由'A' ↔ 'N', 'B' ↔ 'O'，以此类推。考虑循环A-Z
 * 所有的字母都是大写，不要转化任何非字母形式的字符(例如：空格，标点符号)，遇到这些特殊字符，跳过它们。
 * String.fromCharCode(65,66,67)  //"ABC"
 * "ABC".charCodeAt(0) // returns 65
 *   1、判断str[i]是否是大写字母
 *   2、如果是  str[i] = String.fromCharCode(charCodeAt(str[i])+13)
 *   3、不是  不作为
 * @param  {[String]} str [加密字符串]
 * @return {[String]}     [解密字符串]
 */
function rot13(str) { // LBH QVQ VG!

  var rot13Arr = [];
  var rot13Str = '';
  for (var i = 0; i < str.length; i++) {

    // console.log(str[i].charCodeAt());
    if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {

      var charTemp = [];
      if (str[i].charCodeAt() + 13 > 90) {
        charTemp = str[i].charCodeAt() + 13 - (90 - 65 + 1);
      } else {
        charTemp = str[i].charCodeAt() + 13;
      }
      rot13Arr[i] = String.fromCharCode(charTemp);

    }else{
      rot13Arr[i] = str[i];
    }

    // if(str[i].charCodeAt() === 32){
    //   rot13Arr[i] = undefined ;
    // }
  }
  console.log(rot13Arr);
  rot13Str = rot13Arr.join('');
  console.log(rot13Str);
  return rot13Str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC , ! ?");
