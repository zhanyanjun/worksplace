/*
* @Author: Archer
* @Date:   2017-01-09 12:21:49
* @Last Modified by:   Archer
* @Last Modified time: 2017-01-09 15:37:54
* @email:  zxchcyc@gmail.com
* @github: https://github.com/zxchcyc
* @blog:   https://zxchcyc.github.io/
*/

'use strict';
/**
 * 求一个数字的阶乘思路：
 *   1、n!=n*(n-1)*(n-2)...2*1
 *   2、这不就是递归吗
 *   3、注意边界判断
 * @param  {[number]} num [求阶乘的数字]
 * @return {[number]}     [求得阶乘的结果]
 */
function factorialize(num) {

  if(num<=1){
    return 1;//这个地方根据需求优化
  }

  var temp = num*factorialize(num-1);

  return temp;
}

factorialize(5);

