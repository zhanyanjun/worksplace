/*
 * @Author: ArcherZheng
 * @time: 20170426
 * @modify: 20170427
 * @desc: AN4解答8皇后问题
 */

import { Component, OnInit } from '@angular/core';
import { QueenService } from './queen.service';

@Component({
  selector: 'app-queen',
  templateUrl: './queen.component.html',
  styleUrls: ['./queen.component.css'],
  providers: [QueenService],
})
export class QueenComponent implements OnInit {
  desc = '游戏描述:在国际象棋中,皇后的攻击力是最强的,它可以横着走,竖着走,还可以沿着对角线斜着走,假设你可以有无数个旗子,而且每个旗子都是皇后';
  rule1 = '规则1:你可以在棋盘上任意一个空闲的位置落子;';
  rule2 = '规则2:如果落子是安全的则游戏继续,如果落子是不安全的(能被其他皇后攻击到)则游戏结束,判用户输; ';
  rule3 = '规则3:当用户没有位置可以落子时(棋盘上所有的位置都不安全了),游戏结束,判用户赢.';
  rule4 = '规则4:附录:在前面的基础上,现在要求落子必须是8个皇后,保证牌面安全,具体的实现可以根据确定的游戏规则来做,这里只增加一个需求：找到8皇后的具体位置并且显示出来看看';

  private grids:any = [];//棋盘格子对象,存放坐标
  private rowNum:number = 8;//初始棋盘行数
  private colNum:number = 8;//初始棋盘列数
  private tips:boolean = false;//设置是否提示功能

  //8皇后问题
  private posQueen:any = []; //八皇后位置信息
  private posQueenAll:any = []; //所有八皇后位置信息,存放找的的8皇后位置


  //落子处理函数,如果落子安全且棋盘上安全的位置为0则判用户赢
  handlerQueen(event){
    let col = event.target.cellIndex;
    let row = event.target.parentNode.rowIndex;

    if (this.queen.isSafe(this.grids,row,col)) {
      if ( this.queen.safePosNum(this.grids) === 0) {
        alert('你赢了！！');
        this.ngOnInit();
      }
    } else {
      alert('你输了!!');
      this.ngOnInit();
    }
  }

  //开始/重来处理函数
  handlerStart(){
      this.grids=[];
      this.ngOnInit();
  }

  //提示处理函数
  handlerTips(){
    this.tips = !this.tips;
  }

  //找到8皇后的位置处理函数
  //posQueenAll[] 所有8皇后的位置信息
  //posQueenAll[0][] 找到第一组8皇后的位置信息
  //posQueenAll[0][0][] 第一组8皇后第一行的位置信息
  handlerQueenPos(){
    this.ngOnInit();
    this.posQueen = [];
    this.posQueenAll = [];
    this.queen.findQueenPos(this.grids,0,this.posQueen,this.posQueenAll);
    for(let i=0; i < this.posQueenAll[0].length;i++){
      this.grids[this.posQueenAll[0][i][0]][this.posQueenAll[0][i][1]] =8 ;
    }//拿一组出来看看
  }

  constructor(private queen: QueenService) { }
  ngOnInit() {
    this.queen.createGrids(this.grids,this.rowNum,this.colNum);
  }
}
