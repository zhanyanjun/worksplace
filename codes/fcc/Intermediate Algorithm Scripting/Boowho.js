/*
 * @Author: Archer
 * @Date:   2017-01-20 22:25:32
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-20 22:28:32
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 * [检查一个值是否是基本布尔类型，并返回 true 或 false。基本布尔类型即 true 和 false]
 * @param  {[type]} bool [description]
 * @return {[type]}      [description]
 */
function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof bool == "boolean";
}

boo(null);
