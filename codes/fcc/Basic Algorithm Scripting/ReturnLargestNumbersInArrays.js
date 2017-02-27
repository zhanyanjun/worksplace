/*
 * @Author: Archer
 * @Date:   2017-01-09 20:33:42
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-09 21:17:35
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 * 右边大数组中包含了4个小数组，分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组。
 *   1、for循环拿到arr[i]
 *   2、排序subArr = arr[i].sort()
 *   3、拿到排序后最大的子元素subArrMax[] = subArr[0]
 *   4、Array.prototype.join() 转成字符串调用
 * @param  {[Array]} arr [description]
 * @return {[Array]}     [description]
 */
function largestOfFour(arr) {
  // You can do this!

  var subArr = [];
  var subArrMax = [];
  for (var i = 0; i < arr.length; i++) {
    subArr[i] = arr[i].sort(function(a, b) {
      return b - a;
    });
    subArrMax[i] = subArr[i][0];
  }
  console.log(subArrMax);
  // arr = subArrMax.join('');
  // console.log(arr);
  return subArrMax;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
