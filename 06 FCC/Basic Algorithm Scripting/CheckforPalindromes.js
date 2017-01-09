/*
 * @Author: Archer
 * @Date:   2017-01-09 12:21:10
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-09 15:38:39
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';

/**
 * 判断一串字符串是否是回文，什么是回文?自己Google：
 *   1、把字符串里头的字母和数字保留下来，其他都去掉，用正则
 *   2、忽略字符串大小写
 *   3、反转字符串
 *   4、比较
 * @param  {[String]} str [要判断的字符串]
 * @return {[boolean]}     [是/否]
 */
function palindrome(str) {
  // Good luck!

  var re = /[^a-zA-Z\d]+/g;
  var reStr = str.replace(re, '');
  console.log(reStr);
  var lowerCaseStr = reStr.toLowerCase();
  console.log(lowerCaseStr);
  var reverseStr = reverseString(lowerCaseStr);
  console.log(reverseStr);
  if (lowerCaseStr === reverseStr) {
    return true;
  } else {
    return false;
  }

}

/**
 * 反转一个字符串思路：
 *   1、转成字符数组
 *   2、反转数组
 *   3、数组转字符串
 * @param  {[String]} str [反转前]
 * @return {[String]}     [反转后]
 */
function reverseString(str) {
  var array = str.split('');
  var strTemp = array.reverse();
  str = strTemp.join('');
  return str;
}

var temp = palindrome("1 eye for of 1 eye.");
console.log(temp);
