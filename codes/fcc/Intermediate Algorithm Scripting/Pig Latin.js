/*
 * @Author: Archer
 * @Date:   2017-01-17 23:08:34
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-17 23:20:24
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 * [把指定的字符串翻译成 pig latin]
 * 把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"
 * 如果单词以元音开始，你只需要在词尾添加 "way" 就可以了
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function translate(str) {
  var firstLetter = str.charAt(0);
  if (firstLetter === 'a' || firstLetter === 'e' || firstLetter === 'i' || firstLetter === 'o' || firstLetter === 'u') {
    return str.concat("way"); //到这都好说
  } else {
    var words = str.split(""); //如果忽略 separator，则返回整个字符串的数组形式。如果 separator 是一个空字符串，则 str 将会把原字符串中每个字符的数组形式返回。
    var pos = 0;
    for (var i = 0; i < words.length; i++) {
      if (words[i] === 'a' || words[i] === 'e' || words[i] === 'i' || words[i] === 'o' || words[i] === 'u') {
        pos = i; //理解辅音丛
        break;
      }
    }

    var letters = str.substr(0, pos);
    console.log(str.substring(pos).concat(letters).concat("ay"));
    return str.substring(pos).concat(letters).concat("ay");
  }
}

translate("cccconsonant");
