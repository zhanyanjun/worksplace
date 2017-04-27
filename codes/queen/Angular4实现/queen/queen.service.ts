/*
 * @Author: ArcherZheng
 * @time: 20170426
 * @modify: 20170427
 * @desc: AN4解答8皇后问题封装的服务
 */

import { Injectable } from '@angular/core';

@Injectable()
export class QueenService {
  constructor() { }

 /*
  * @Author: ArcherZheng
  * @time: 20170427
  * @modify: 20170427
  * @desc：根据传进来的行数和列数,创建一个row行,col列的数组,初始值为-1
  * @param  {[Array][Number][Number]} grids,row,col [棋盘,棋盘的行数,列数]
  * @return {[Array] grids [棋盘]}
  */
  createGrids(grids: any,row: number,col: number){
    for (let i = 0; i < row; i++) {
      grids[i] = [];
      for (let j = 0; j < col; j++) {
        grids[i][j] = -1;
      }
    }
  }

 /*
  * @Author: ArcherZheng
  * @time: 20170427
  * @modify: 20170427
  * @desc：判断落子位置是否安全,如果安全则把此位置标为-3,落子能攻击到的位置标为-2
  * @param  {[Array][Number][Number]} grids,x,y [棋盘,落子行坐标,落子列坐标]
  * @return {[Array][Boolean] grids,true/false [棋盘,是否安全]}
  */
  isSafe(grids: any,x: number,y: number){
    let rowNum = grids.length;
    let colNum = grids[0].length;
    if (grids[x][y] === -1) {
      for (let i = 0; i < rowNum; i++) {
        for (let j = 0; j < colNum; j++) {
          if (i === x || j === y || (i+j) === (x + y) || (i-j) === (x - y)) {
             grids[i][j] = -2;//设置为负数不要影响到其他地方
          }
        }
      }
      grids[x][y] = -3;//设置为负数不要影响到其他地方
      return true;
    } else {
      return false;
    }
  }

 /*
  * @Author: ArcherZheng
  * @time: 20170427
  * @modify: 20170427
  * @desc：判断棋盘上还有多少个安全的位置
  * @param  {[Array]} grids [棋盘]
  * @return {[Nunber] count [安全位置个数]}
  */
  safePosNum(grids: any){
    let rowNum = grids.length;
    let colNum = grids[0].length;
    let count = 0;
    for (let i = 0; i < rowNum; i++) {
      for (let j = 0; j < colNum; j++) {
        if ((grids[i][j] === -1)) {
           count++;
        }
      }
    }
    return count;
  }

 /*
  * @Author: ArcherZheng
  * @time: 20170427
  * @modify: 20170427
  * @desc：根据传进来的行数和列数,创建一个row行,col列的数组,初始值为-1
  * @param  {[Array][Number][Array][Array]} grids,iQueen,posQueen,posQueenAll [棋盘,第几行开始找,8皇后的一种位置信息,8皇后的所有位置信息]
  * @return {[Array][Array] grids,posQueenAll [棋盘,,8皇后的所有位置信息]}
  * //posQueenAll[] 所有8皇后的位置信息
  * //posQueenAll[0][] 找到第一组8皇后的位置信息
  * //posQueenAll[0][0][] 第一组8皇后第一行的位置信息
  */
  findQueenPos(grids: any,iQueen:number,posQueen:any,posQueenAll:any){
    let rowNum = grids.length;
    let colNum = grids[0].length;
    if (iQueen === rowNum) {
      posQueenAll.push(posQueen.concat()); //concat的作用是拷贝一份放进All中,否则进去的是引用
      return;
    }
    for (let i = 0; i < rowNum; i++) {
      if (grids[iQueen][i] === -1) {
        grids[iQueen][i] = iQueen;
        posQueen.push([iQueen,i]);

        for (let j = 0; j < rowNum; j++) {
          for (let k = 0; k < colNum; k++) {
            if (grids[j][k] === -1 && (j === iQueen  || k === i || (j+k) === (iQueen + i) || (j-k) === (iQueen - i))) {
              grids[j][k] = iQueen;
            }
          }
        }

        this.findQueenPos(grids,iQueen + 1,posQueen,posQueenAll);
        // 回溯
        posQueen.pop();
        for (let j = 0; j < rowNum; j++) {
          for (let k = 0; k < colNum; k++) {
            if (grids[j][k] === iQueen) {
              grids[j][k] = -1;
            }
          }
        }
      }
    }
  }

}
