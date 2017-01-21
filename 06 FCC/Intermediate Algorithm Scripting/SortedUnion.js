/*
 * @Author: Archer
 * @Date:   2017-01-21 23:22:23
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-21 23:40:27
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 * [写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。
 * 换句话说，所有数组中的所有值都应该以原始顺序被包含在内，但是在最终的数组中不包含重复值。
 * 非重复的数字应该以它们原始的顺序排序，但最终的数组不应该以数字顺序排序。]
 * @param  {[type]} arr1 [description]
 * @param  {[type]} arr2 [description]
 * @param  {[type]} arr3 [description]
 * @return {[type]}      [description]
 */
function unite(arr1, arr2, arr3) {
  var combinedArgs = [];
  for (var i = 0; i < arguments.length; i++) {
    combinedArgs.push(arguments[i]);
  }

  console.log(combinedArgs);
  var result = [];
  for (i = 0; i < combinedArgs.length; i++) {
    combinedArgs[i].forEach(function(val) {
      if (!result.includes(val)) {
        result.push(val);
      }
    });
  }
  console.log(result);
  return result;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
