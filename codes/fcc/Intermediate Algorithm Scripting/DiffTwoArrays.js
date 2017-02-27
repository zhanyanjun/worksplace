/*
 * @Author: Archer
 * @Date:   2017-01-14 18:22:07
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-14 18:49:07
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 * 比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。
 * 换言之，返回两个数组的差异。
 * slice() 方法会浅复制（shallow copy）数组的一部分到一个新的数组，并返回这个新数组。
 * filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。
 * indexOf()方法返回给定元素能找在数组中找到的第一个索引值，否则返回-1。
 * concat() 方法将传入的数组或非数组值与原数组合并,组成一个新的数组并返回。
 *   1、用indexOf()遍历arr1中的元素是否在arr2中，找到相同的元素
 *   2、分别去除掉相同的元素
 *   3、合并并返回
 * @param  {[Array]} arr1 [description]
 * @param  {[Array]} arr2 [description]
 * @return {[Array]}      [两个数组中独有的元素]
 */
function diff(arr1, arr2) {
  var newArr = [];

  var sameArr = [];
  var sameArrIndex = 0;
  var difArr1 = [];
  var difArr2 = [];

  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) !== -1) {
      sameArr[sameArrIndex] = arr2[i];
      sameArrIndex++;
    }
  }
  console.log(sameArr);

  function isSameElement(element) {
    if (sameArr.indexOf(element) === -1) { //不相同的
      return true;
    }
  }
  difArr1 = arr1.filter(isSameElement);
  console.log(difArr1);

  difArr2 = arr2.filter(isSameElement);
  console.log(difArr2);

  newArr = difArr1.concat(difArr2);
  console.log(newArr);
  // Same, same; but different.
  return newArr;
}

diff([1, 2, 3, 4], [3, 4, 5, 6]);
