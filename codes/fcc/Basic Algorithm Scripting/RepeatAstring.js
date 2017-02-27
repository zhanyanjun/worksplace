/*
* @Author: Archer
* @Date:   2017-01-09 21:33:59
* @Last Modified by:   Archer
* @Last Modified time: 2017-01-09 21:38:52
* @email:  zxchcyc@gmail.com
* @github: https://github.com/zxchcyc
* @blog:   https://zxchcyc.github.io/
*/

'use strict';
/**
 * 重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串:
 *   1、repeat() 方法会构造并返回一个重复当前字符串若干次数的新字符串.
 * @param  {[String]} str [被重复的字符串]
 * @param  {[Number]} num [重复次数]
 * @return {[str]}     [description]
 */
function repeat(str, num) {
  // repeat after me
  if(num <0)
    return '';
  var strRep = str.repeat(num);
  console.log(strRep)
  return strRep;
}

repeat("abc", 3);
