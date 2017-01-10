/*
 * @Author: Archer
 * @Date:   2017-01-10 09:59:59
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-10 11:52:08
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 * 删除数组中的所有假值。在JavaScript中，假值有false、null、0、""、undefined 和 NaN
 * filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。
 *   1、创建isFalse()函数过滤假值
 *   2、利用arr.filter(isFalse)过滤
 * @param  {[Array]} arr [可能有假值的数组]
 * @return {[Array]}     [清除假值的数组]
 */
function bouncer(arr) {
  // Don't show a false ID to this bouncer.

  function ifFalse(element) {

    if (typeof element === 'string' && element !=='') {
      console.log(element);
      return true;
    }
    if (element === false || element === null || element === 0 || element === '' || element === undefined || isNaN(element)) {
      // console.log(element);
      // isNaN("blabla")   // true: "blabla"不能转换成数值
      // isNaN("37");      // false: 可以被转换成数值37
      // isNaN("37.37");   // false: 可以被转换成数值37.37
      // isNaN("");        // false: 空字符串被转换成0
      // isNaN(" ");       // false: 包含空格的字符串被转换成0
      // isNaN(NaN);       // true
      // isNaN(undefined); // true
      // isNaN({});        // true

      // isNaN(true);      // false
      // isNaN(null);      // false
      // isNaN(37);        // false
      return false;
    } else {
      return true;
    }
  }

  var filtered = arr.filter(ifFalse);
  console.log(filtered);
  return filtered;
}

bouncer([7, "ate", "", false, 9, NaN]);


// function isBigEnough(element) {
//   return element >= 10;
// }
// var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
