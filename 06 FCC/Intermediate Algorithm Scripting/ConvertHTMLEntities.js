/*
 * @Author: Archer
 * @Date:   2017-01-21 23:55:34
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-21 23:57:43
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 * [将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function convert(str) {
  // &colon;&rpar;
  var chars = ['&', '<', '>', '"', "'"];
  var entities = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];
  console.log(chars);
  console.log(entities);
  var letters = str.split("");
  for (var i = 0; i < letters.length; i++) {
    for (var j = 0; j < chars.length; j++) {
      if (letters[i] == chars[j]) {
        letters[i] = entities[j];
      }
    }
  }
  console.log(letters.join(""));
  return letters.join("");
}

convert("Dolce & Gabbana");
