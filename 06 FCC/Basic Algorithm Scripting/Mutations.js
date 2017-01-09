/*
 * @Author: Archer
 * @Date:   2017-01-09 23:24:42
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-10 00:07:29
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 * 如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。
 * indexOf() 方法返回指定值在字符串对象中首次出现的位置。从 fromIndex 位置开始查找，如果不存在，则返回 -1。
 * toLowerCase() 会将调用该方法的字符串值转为小写形式，并返回。
 * 举例， ["hello", "Hello"]应该返回true，因为在忽略大小写的情况下，第二个字符串的所有字符都可以在第一个字符串找到。
 *        ["hello", "hey"]应该返回false，因为字符串"hello"并不包含字符"y"。
 *        ["Alien", "line"]应该返回true，因为"line"中所有字符都可以在"Alien"找到。
 *        1、数组内两个子元素转换为小写  arrLower[0]= arr[0].toLowerCase()  arrLower[1]= arr[1].toLowerCase()
 *        2、判断 返回值 arrLower[0].indexOf(arrLower[1])
 *        3、<0  return false
 *
 * 理解错题意了 我艹
 *   1、数组内两个子元素转换为小写
 *   2、循环判断arrLower[1]中的每一个元素在arrLower[0]中的位置，不存在就return false
 * @param  {[Array]} arr [包含两个字符串的数组]
 * @return {[Boolean]}     [description]
 */
function mutation(arr) {

  var arrLower = [];
  arrLower[0] = arr[0].toLowerCase();
  arrLower[1] = arr[1].toLowerCase();

  // if (arrLower[0].indexOf(arrLower[1]) >= 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  //

  for (var i = 0; i < arrLower[1].length; i++) {
    if(arrLower[0].indexOf(arrLower[1][i]) <0){
      return false;
    }
  }
  return true;

}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
