/*
 * @Author: Archer
 * @Date:   2017-01-09 17:02:44
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-09 17:58:57
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

/**
 * 确保字符串的每个单词首字母都大写，其余部分小写。
 *   1、String.prototype.toLowerCase()弄成小写strLower
 *   2、String.prototype.split()弄成subStrArray
 *   3、String.prototype.split()弄成subStrLetterArray
 *   4、String.prototype.toUpperCase()弄成大写subStrLetterArraUp
 *   5、Array.prototype.join()拼接数组为字符串
 * @param  {[String]} str [description]
 * @return {[String]}     [description]
 */
function titleCase(str) {

  var strLower = str.toLowerCase();
  var subStrArray = strLower.split(' ');

  var subStrLetterArray = [];
  for (var i = 0; i < subStrArray.length; i++) {
    subStrLetterArray[i] = subStrArray[i].split('');
  }

  var subStr = [];
  for (var j = 0; j < subStrLetterArray.length; j++) {
    subStrLetterArray[j][0] = subStrLetterArray[j][0].toUpperCase();
    // console.log(subStrLetterArray[j][0]);
    // console.log("----------")
    subStr[j] = subStrLetterArray[j].join('');
  }

  str = subStr.join(' ');
  // console.log(str);
  return str;
}

titleCase("I'm a little tea pot");
