/*
* @Author: Archer
* @Date:   2017-01-09 23:14:59
* @Last Modified by:   Archer
* @Last Modified time: 2017-01-09 23:24:22
* @email:  zxchcyc@gmail.com
* @github: https://github.com/zxchcyc
* @blog:   https://zxchcyc.github.io/
*/

'use strict';
/**
 * 返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始。
 *   1、Array.prototype.slice()  Array.prototype.splice()
 *   2、判断arr.length <= howMany return [];
 *   3、> arr.slice(howMany)
 *   4、
 * @param  {[Array]} arr     [被截断的数组]
 * @param  {[Number]} howMany [截断的个数]
 * @return {[type]}         [被截断后剩下的数组]
 */
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  if(arr.length <= howMany){
    return [];
  }else{
    return arr.slice(howMany);
  }

  return arr;
}

slasher([1, 2, 3], 2);
