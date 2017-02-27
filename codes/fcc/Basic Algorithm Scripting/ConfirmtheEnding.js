/*
 * @Author: Archer
 * @Date:   2017-01-09 21:23:50
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-09 21:32:39
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 * 检查一个字符串(str)是否以指定的字符串(target)结尾
 *   1、String.prototype.substr()
 *   2、str.substr(start[, length])从0开始匹配直到末尾
 * @param  {[String]} str    [被检查的字符串]
 * @param  {[String]} target [要匹配的子串]
 * @return {[Boolean]}        [description]
 */
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  for (var i= 0; i < str.length; i++) {
    if (str.substr(i) === target)
      return true;
  }
  console.log('----')
  return false;
}

confirmEnding("Bastian", "a");
