/*
 * @Author: Archer
 * @Date:   2017-01-10 11:58:02
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-10 12:13:47
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 * 先给数组排序，然后找到指定的值在数组的位置，最后返回位置对应的索引。
举例：where([1,2,3,4], 1.5) 应该返回 1。因为1.5插入到数组[1,2,3,4]后变成[1,1.5,2,3,4]，而1.5对应的索引值就是1。
同理，where([20,3,5], 19) 应该返回 2。因为数组会先排序为 [3,5,20]，19插入到数组[3,5,20]后变成[3,5,19,20]，而19对应的索引值就是2。
 *  1、给数组从小到大排序
 *  2、找到num应该插入的位置
 *  3、返回索引
 * @param  {[Array]} arr [被插入的数组]
 * @param  {[Number]} num [要插入的值]
 * @return {[Number]}     [被插入值在数组中索引]
 */
function where(arr, num) {
  // Find my place in this sorted array.

  arr.sort(function(a, b) {
    return a - b;
  }); //从小到大排序

  console.log(arr);

  // 1、for 循环一个一个比较
  // 2、二分法查找
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      console.log(i);
      return i;
    }
  }
  console.log(arr.length);
  return arr.length;
  // return num;
}

where([5, 3, 20, 3], 5);
