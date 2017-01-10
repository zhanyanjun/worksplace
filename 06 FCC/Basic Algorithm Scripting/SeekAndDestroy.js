/*
 * @Author: Archer
 * @Date:   2017-01-10 10:41:35
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-10 11:53:46
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 * 实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。
 * filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。
 * arguments 是一个类数组对象。代表传给一个function的参数列表。
 *   1、拿到参数列表arguments[]
 *   2、创建isArg()函数过滤参数值
 *   3、利用arr.filter(isFalse)过滤
 * @param  {[Array]} arr [待摧毁的数组]
 * @param  {[arg]} arg1 [要摧毁的值]
 * @param  {[arg]} arg2 [要摧毁的值]
 * @param  {[arg]} arg3 [要摧毁的值]
 * @return {[Array]}     [剩下的元素]
 */
function destroyer(arr) {
  // Remove all the values
  //

  var args = [];
  for (var i = 0; i < arguments.length; i++) {
    args[i] = arguments[i];
  }
  // console.log(args.length);

  function isArg(element) {
    for (var i = 1; i < args.length; i++) {
      // console.log("-----");
      if (element === args[i]) {
        // console.log(args[i]);
        return false;
      }
    }

    // console.log("-----");
    return true;
  }

  var filtered = arguments[0].filter(isArg);
  console.log(filtered);

  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
