/*
 * @Author: Archer
 * @Date:   2017-01-18 18:32:47
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-18 18:37:36
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 * [DNA 链缺少配对的碱基。依据每一个碱基，为其找到配对的碱基，然后将结果作为第二个数组返回。]
 * Base pairs（碱基对） 是一对 AT 和 CG，为给定的字母匹配缺失的碱基。
 * 在每一个数组中将给定的字母作为第一个碱基返回。例如，对于输入的 GCG，相应地返回 [["G", "C"], ["C","G"],["G", "C"]]
 * 字母和与之配对的字母在一个数组内，然后所有数组再被组织起来封装进一个数组。
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function pair(str) {
  var pair1 = ["A", "T"];
  var pair2 = ["C", "G"];
  var toPair = str.split("");
  var result = [];
  for (var i = 0; i < toPair.length; i++) {
    var arr = [];
    arr.push(toPair[i]);
    if (pair1[0] === toPair[i]) {
      arr.push(pair1[1]);
    } else if (pair1[1] === toPair[i]) {
      arr.push(pair1[0]);
    } else if (pair2[0] === toPair[i]) {
      arr.push(pair2[1]);
    } else if (pair2[1] === toPair[i]) {
      arr.push(pair2[0]);
    }
    result.push(arr);

  }
  console.log(result);
  return result;

}

pair("GCG");
