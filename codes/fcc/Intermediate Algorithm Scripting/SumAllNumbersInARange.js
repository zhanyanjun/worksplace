/*
 * @Author: Archer
 * @Date:   2017-01-11 21:58:16
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-11 22:21:45
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 * 我们会传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。最小的数字并非总在最前面。
 * Math.max() 函数返回一组数中的最大值。
 * Math.min() 返回零个或更多个数值的最小值。
 * Array.prototype.reduce()接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值。
 *   1、拿到数组最大值/最小值arr.max() arr.min()
 *   2、构造数组 allnumArr[]
 *   3、用reduce()累加并返回
 * @param  {[Array]} arr [包含两个数字的数组]
 * @return {[Number]}     [返回这两个数字和它们之间所有数字的和]
 */
function sumAll(arr) {

  var allnumArr = [];
  var sum;
  console.log(getMaxOfArray(arr) - getMinOfArray(arr));
  for (var i = 0; i <= (getMaxOfArray(arr) - getMinOfArray(arr)); i++) {
    allnumArr[i] = getMinOfArray(arr) + i;
    // console.log(arr.max - arr.min);
  }
  console.log(allnumArr);
  sum = allnumArr.reduce(function(a, b) {
    return a + b;
  }, 0);

  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
  }

  return sum;
}

var temp = sumAll([1, 4]);
console.log(temp);
