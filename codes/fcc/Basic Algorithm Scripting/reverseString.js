/*
* @Author: Archer
* @Date:   2017-01-08 21:20:13
* @Last Modified by:   Archer
* @Last Modified time: 2017-01-09 15:38:27
* @email:  zxchcyc@gmail.com
* @github: https://github.com/zxchcyc
* @blog:   https://zxchcyc.github.io/
*/

'use strict';
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
  console.log(array);
  var strTemp = array.reverse();
  console.log(strTemp);
  str = strTemp.join('');
  console.log(str);
  return str;
}

var print = reverseString("hello");
console.log(print);
