/*
 * @Author: Archer
 * @Date:   2017-01-09 14:43:23
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-09 16:44:10
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';

/**
 * 找到提供的句子中最长的单词，并计算它的长度:
 *   1、String.split()提取子串数组
 *   2、String.length()拿到每个子串长度并保存在一个数组里头
 *   3、Array.prototype.sort()这个数组从大到小排序
 *   4、返回数组第一个元素
 *   5、如果题目改为返回最长子串，上面的做法就不靠谱了,下面注释部分给出解法
 * @param  {[String]} str [要计算子串长度长度的字符串]
 * @return {[number]}     [最长子串长度]
 */
function findLongestWord(str) {

  var subStrArray = str.split(' ');
  console.log(subStrArray);
  var subStrArrayLengthArray = [];
  for (var i = 0; i < subStrArray.length; i++) {
    subStrArrayLengthArray[i] = subStrArray[i].length;
    console.log(subStrArrayLengthArray);
  }
  var subStrArrayLengthArraySort = subStrArrayLengthArray.sort(function(a, b) {
    return b - a;
  });

  return subStrArrayLengthArraySort[0];


  // var subStrArray = str.split(' ');
  // var subStrArrayLengthArray = [];
  // var subStrMap = new Map();
  // for (var i = 0; i < subStrArray.length; i++) {
  //   //遍历的时候把字符串和长度放到Map里
  //   subStrMap.set(subStrArray[i], subStrArray[i].length);
  //   subStrArrayLengthArray[i] = subStrArray[i].length;
  // }
  // var subStrArrayLengthArraySort = subStrArrayLengthArray.sort(function(a, b) {
  //   return b - a;
  // });

  // var subStrMax = [];
  // var MaxCount = 0;
  // for (var [key, value] of subStrMap.entries()) {
  //   if (value === subStrArrayLengthArraySort[0]) {
  //     subStrMax[MaxCount] = key;
  //     MaxCount++;
  //   }
  // }
  // console.log(subStrMax);
  // return subStrArrayLengthArraySort[0];
}

var temp = findLongestWord("The quick brown fox jumped over the lazy dog dog helloA");
console.log(temp);
