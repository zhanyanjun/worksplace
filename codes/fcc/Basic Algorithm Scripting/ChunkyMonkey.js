/*
 * @Author: Archer
 * @Date:   2017-01-09 22:46:56
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-09 23:13:48
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 * 把一个数组arr按照指定的数组大小size分割成若干个数组块。
 * 例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];
 *   1、Array.prototype.slice()
 *   2、判断arr.length > size  arr.slice(0,size) arr.silce(size,size*2) arr.slice(size*2) return arrSlice
 *   这里注意循环条件  和最后一次循环
 *   3、<size 直接return
 * @param  {[Array]} arr  [description]
 * @param  {[Number]} size [description]
 * @return {[Array]}      [description]
 */
function chunk(arr, size) {
  // Break it up.

  var arrSlice = [];
  if (arr.length > size) {
    for (var i = 0; i < arr.length / size; i++) {
      arrSlice[i] = arr.slice(size * i, size * (i + 1));
      console.log(arr.length / size);//这里不取整
    }
    // arrSlice[i] = arr.slice(size * (i - 1));
  } else {
    return arr;
  }

  return arrSlice;
}

var temp = chunk(["a", "b", "c", "d", "e"], 3);
console.log(temp);
