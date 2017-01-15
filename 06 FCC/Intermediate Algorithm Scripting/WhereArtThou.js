/*
 * @Author: Archer
 * @Date:   2017-01-15 19:49:57
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-15 21:02:48
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 *写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）
 *的所有对象的数组。如果返回的数组中包含 source 对象的属性-值对，
 *那么此对象的每一个属性-值对都必须存在于 collection 的对象中。
 *hasOwnProperty() 方法用来判断某个对象是否含有指定的自身属性。
 *Object.keys() 方法会返回一个由给定对象的所有可枚举自身属性的属性名组成的数组，
 *数组中属性名的排列顺序和使用for-in循环遍历该对象时返回的顺序一致
 *(顺序一致不包括数字属性)（两者的主要区别是 for-in 还会遍历出一个对象从其原型链上继承到的可枚举属性）。
 * @param  {[Array]} collection [对象数组-比如联系人的全部信息]
 * @param  {[Object]} source    [对象-比如联系人的部分信息]
 * @return {[Array]}            [对象数组-匹配上的全部对象]
 */
function where(collection, source) {
  var arr = [];
  var index = 0;
  var flag = 0;
  // What's in a name?
  var keysSource = [];
  keysSource = Object.keys(source);

  for (var j = 0; j < collection.length; j++) {
    flag = 0;
    for (var i = 0; i < keysSource.length; i++) {

      if (collection[j].hasOwnProperty(keysSource[i])) {

        if (source[keysSource[i]] === collection[j][keysSource[i]]) {

          flag++;
          if (flag === keysSource.length) {

            arr[index++] = collection[j];
          }

        }
      }

    }
  }

  console.log(arr);
  return arr;
}

where([{
  "a": 1,
  "b": 2
}, {
  "a": 1
}, {
  "a": 1,
  "b": 2,
  "c": 2
}], {
  "b": 1,
  "c": 2
});
