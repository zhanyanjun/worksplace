/*
 * @Author: Archer
 * @Date:   2017-01-09 21:39:22
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-01-09 22:46:22
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
/**
 * 用瑞兹来截断对面的退路!截断一个字符串！如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。切记，插入到字符串尾部的三个点号也会计入字符串的长度。但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。
 *   1、String.prototype.slice()包头不包尾
 *   2、判断num
 *   3、<=3 var strSlice = str.slice(0,num) (num<1不做判断，根据需求来)
 *   4、>3 准备一个子串 var substr="..."
 *   5、concat() 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。
 *   6、var strSlice = str.slice(0,num-3).concat(substr)
 *看错条件了 我艹
 *
 *   1、str.length >num  str.slice(0,num-3).concat(substr)
 *   2、<=num  str.slice(0.num).concat
 * @param  {[String]} str [要被截断的串]
 * @param  {[Number]} num [长度]
 * @return {[String]}     [description]
 */
function truncate(str, num) {
  // Clear out that junk in your trunk
  // var strSlice = "";
  // if(num <= 3){
  //   strSlice = str.slice(0,num);
  // }else{
  //   var substr = "...";
  //   strSlice = str.slice(0,num-3).concat(substr);
  // }
  // console.log(strSlice);
  // return strSlice;
  //

  var strSlice = "";
  var substr = "...";

  if (str.length > num) {
    if (num <= 3) {
      return str.slice(0, num).concat(substr);
    } else {
      return str.slice(0, num - 3).concat(substr);
    }
  } else {
    console.log("-----");
    return str.slice(0, num);
  }

}

var temp = truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
console.log(temp);
