/*
 * @Author: Archer
 * @Date:   2017-01-15 18:45:52
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-15 19:49:42
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 *将给定的数字转换成罗马数字。http://www.mathsisfun.com/roman-numerals.html
 * @param  {[Number]} num [description]
 * @return {[String]}     [description]
 */
function convert(num) {
  var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var result = '';
  for (var i = 0; i < decimals.length; i++) {
    while (decimals[i] <= num) {
      result += romans[i];
      num -= decimals[i];

    }
  }
  console.log(result);
  return result;
}

convert(3);
