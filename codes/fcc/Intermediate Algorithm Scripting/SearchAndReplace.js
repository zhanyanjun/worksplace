/*
 * @Author: Archer
 * @Date:   2017-01-16 21:18:00
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-16 21:22:27
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 * 使用给定的参数对句子执行一次查找和替换，然后返回新句子。
 * 第一个参数是将要对其执行查找和替换的句子。
 * 第二个参数是将被替换掉的单词（替换前的单词）。
 * 第三个参数用于替换第二个参数（替换后的单词）。
 * 注意：替换时保持原单词的大小写。例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。
 * @param  {[type]} str    [description]
 * @param  {[type]} before [description]
 * @param  {[type]} after  [description]
 * @return {[type]}        [description]
 */
function myReplace(str, before, after) {
  var words = str.split(" ");
  var wordPos = words.indexOf(before);
  console.log("Original sentence = " + str);
  console.log("Before pos = " + wordPos);
  var firstLetter = words[wordPos].charAt(0);
  var newWord = '';
  if (firstLetter === words[wordPos].charAt(0).toUpperCase()) {
    newWord = after.charAt(0).toUpperCase() + after.substring(1);
  } else if (firstLetter === words[wordPos].charAt(0).toLowerCase()) {
    newWord = after.charAt(0).toLowerCase() + after.substring(1);
  }
  words.splice(wordPos, 1, newWord);
  var newStr = words.join(" ");
  return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
