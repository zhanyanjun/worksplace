webpackJsonp([1,4],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "  * {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  body {\r\n    min-width: 768px;\r\n  }\r\n  \r\n  .about {\r\n    width: 100%;\r\n  }\r\n  \r\n  .about p,\r\n  .setup {\r\n    width: 768px;\r\n    margin: 20px auto;\r\n  }\r\n  \r\n  .setup {\r\n    text-align: center;\r\n  }\r\n  \r\n  .setup input~div,\r\n  .setup input {\r\n    background-color: transparent;\r\n    border: none;\r\n    border-radius: 0;\r\n    height: 35px;\r\n    line-height: 35px;\r\n    width: 10%;\r\n    padding: 0;\r\n    box-shadow: none;\r\n    outline: none;\r\n    border-bottom: 1px solid #444;\r\n  }\r\n  \r\n  .setup input~div {\r\n    background-color: #444;\r\n    color: #ddd;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .setup .no-tips {\r\n    color: #444 !important;\r\n    background-color: #ddd !important;\r\n    border-bottom: 1px solid #ddd !important;\r\n  }\r\n  \r\n  table {\r\n    height: auto;\r\n    margin: 50px auto;\r\n    overflow: hidden;\r\n    border: 1px #fff solid;\r\n    background-color: #fff;\r\n    border-collapse: collapse;\r\n    text-align: center;\r\n  }\r\n  \r\n  table td {\r\n    color: #ddd;\r\n    background-color: #444;\r\n    border: 1px #fff solid;\r\n    height: 50px;\r\n    width: 50px;\r\n  }\r\n  \r\n  table .unsafe {\r\n    color: #444;\r\n    background-color: #ddd;\r\n  }\r\n  \r\n  table .no-tips {\r\n    color: #ddd;\r\n    background-color: #444;\r\n  }\r\n  \r\n  table .queen {\r\n    color: #444;\r\n    background-color: #ddd;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "<app-queen>\n</app-queen>"

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports = "<table>\n  <tr *ngFor=\"let row of grids\">\n    <td *ngFor=\"let col of row\" (click)=\"handlerQueen($event)\" [class.unsafe]=\"col === -1 ? false:true\" [class.no-tips]=\"!tips\" [class.queen]=\"(col === -3 || col ===8) ? true:false\">\n    </td>\n  </tr>\n</table>\n\n<div class=\"setup\">\n  <input id=\"rows\" type=\"text\" placeholder=\"行数:8\" value=\"\" [(ngModel)]=\"colNum\">\n  <input id=\"cols\" type=\"text\" placeholder=\"列数:8\" value=\"\" [(ngModel)]=\"rowNum\">\n  <div id=\"start\" (click)=\"handlerStart($event)\">开始/重来</div>\n  <div id=\"tips\" (click)=\"handlerTips($event)\" [class.no-tips]=\"tips\">提示</div>\n  <div id=\"queen\" (click)=\"handlerQueenPos($event)\">找到8皇后</div>\n</div>\n\n<div class=\"about\">\n  <p>{{desc}}</p>\n  <p>{{rule1}}</p>\n  <p>{{rule2}}</p>\n  <p>{{rule3}}</p>\n  <p>{{rule4}}</p>\n</div>"

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74);


/***/ }),

/***/ 73:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 73;


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(85);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(142),
        styles: [__webpack_require__(139)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__queen_queen_component__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { QueenService } from './queen/queen.service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__queen_queen_component__["a" /* QueenComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__queen_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueenComponent; });
/*
 * @Author: ArcherZheng
 * @time: 20170426
 * @modify: 20170427
 * @desc: AN4解答8皇后问题
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QueenComponent = (function () {
    function QueenComponent(queen) {
        this.queen = queen;
        this.desc = '游戏描述:在国际象棋中,皇后的攻击力是最强的,它可以横着走,竖着走,还可以沿着对角线斜着走,假设你可以有无数个旗子,而且每个旗子都是皇后';
        this.rule1 = '规则1:你可以在棋盘上任意一个空闲的位置落子;';
        this.rule2 = '规则2:如果落子是安全的则游戏继续,如果落子是不安全的(能被其他皇后攻击到)则游戏结束,判用户输; ';
        this.rule3 = '规则3:当用户没有位置可以落子时(棋盘上所有的位置都不安全了),游戏结束,判用户赢.';
        this.rule4 = '规则4:附录:在前面的基础上,现在要求落子必须是8个皇后,保证牌面安全,具体的实现可以根据确定的游戏规则来做,这里只增加一个需求：找到8皇后的具体位置并且显示出来看看';
        this.grids = []; //棋盘格子对象,存放坐标
        this.rowNum = 8; //初始棋盘行数
        this.colNum = 8; //初始棋盘列数
        this.tips = false; //设置是否提示功能
        //8皇后问题
        this.posQueen = []; //八皇后位置信息
        this.posQueenAll = []; //所有八皇后位置信息,存放找的的8皇后位置
    }
    //落子处理函数,如果落子安全且棋盘上安全的位置为0则判用户赢
    QueenComponent.prototype.handlerQueen = function (event) {
        var col = event.target.cellIndex;
        var row = event.target.parentNode.rowIndex;
        if (this.queen.isSafe(this.grids, row, col)) {
            if (this.queen.safePosNum(this.grids) === 0) {
                alert('你赢了！！');
                this.ngOnInit();
            }
        }
        else {
            alert('你输了!!');
            this.ngOnInit();
        }
    };
    //开始/重来处理函数
    QueenComponent.prototype.handlerStart = function () {
        this.grids = [];
        this.ngOnInit();
    };
    //提示处理函数
    QueenComponent.prototype.handlerTips = function () {
        this.tips = !this.tips;
    };
    //找到8皇后的位置处理函数
    //posQueenAll[] 所有8皇后的位置信息
    //posQueenAll[0][] 找到第一组8皇后的位置信息
    //posQueenAll[0][0][] 第一组8皇后第一行的位置信息
    QueenComponent.prototype.handlerQueenPos = function () {
        this.ngOnInit();
        this.posQueen = [];
        this.posQueenAll = [];
        this.queen.findQueenPos(this.grids, 0, this.posQueen, this.posQueenAll);
        for (var i = 0; i < this.posQueenAll[0].length; i++) {
            this.grids[this.posQueenAll[0][i][0]][this.posQueenAll[0][i][1]] = 8;
        } //拿一组出来看看
    };
    QueenComponent.prototype.ngOnInit = function () {
        this.queen.createGrids(this.grids, this.rowNum, this.colNum);
    };
    return QueenComponent;
}());
QueenComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-queen',
        template: __webpack_require__(143),
        styles: [__webpack_require__(140)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__queen_service__["a" /* QueenService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__queen_service__["a" /* QueenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__queen_service__["a" /* QueenService */]) === "function" && _a || Object])
], QueenComponent);

var _a;
//# sourceMappingURL=queen.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueenService; });
/*
 * @Author: ArcherZheng
 * @time: 20170426
 * @modify: 20170427
 * @desc: AN4解答8皇后问题封装的服务
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QueenService = (function () {
    function QueenService() {
    }
    /*
     * @Author: ArcherZheng
     * @time: 20170427
     * @modify: 20170427
     * @desc：根据传进来的行数和列数,创建一个row行,col列的数组,初始值为-1
     * @param  {[Array][Number][Number]} grids,row,col [棋盘,棋盘的行数,列数]
     * @return {[Array] grids [棋盘]}
     */
    QueenService.prototype.createGrids = function (grids, row, col) {
        for (var i = 0; i < row; i++) {
            grids[i] = [];
            for (var j = 0; j < col; j++) {
                grids[i][j] = -1;
            }
        }
    };
    /*
     * @Author: ArcherZheng
     * @time: 20170427
     * @modify: 20170427
     * @desc：判断落子位置是否安全,如果安全则把此位置标为-3,落子能攻击到的位置标为-2
     * @param  {[Array][Number][Number]} grids,x,y [棋盘,落子行坐标,落子列坐标]
     * @return {[Array][Boolean] grids,true/false [棋盘,是否安全]}
     */
    QueenService.prototype.isSafe = function (grids, x, y) {
        var rowNum = grids.length;
        var colNum = grids[0].length;
        if (grids[x][y] === -1) {
            for (var i = 0; i < rowNum; i++) {
                for (var j = 0; j < colNum; j++) {
                    if (i === x || j === y || (i + j) === (x + y) || (i - j) === (x - y)) {
                        grids[i][j] = -2; //设置为负数不要影响到其他地方
                    }
                }
            }
            grids[x][y] = -3; //设置为负数不要影响到其他地方
            return true;
        }
        else {
            return false;
        }
    };
    /*
     * @Author: ArcherZheng
     * @time: 20170427
     * @modify: 20170427
     * @desc：判断棋盘上还有多少个安全的位置
     * @param  {[Array]} grids [棋盘]
     * @return {[Nunber] count [安全位置个数]}
     */
    QueenService.prototype.safePosNum = function (grids) {
        var rowNum = grids.length;
        var colNum = grids[0].length;
        var count = 0;
        for (var i = 0; i < rowNum; i++) {
            for (var j = 0; j < colNum; j++) {
                if ((grids[i][j] === -1)) {
                    count++;
                }
            }
        }
        return count;
    };
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
    QueenService.prototype.findQueenPos = function (grids, iQueen, posQueen, posQueenAll) {
        var rowNum = grids.length;
        var colNum = grids[0].length;
        if (iQueen === rowNum) {
            posQueenAll.push(posQueen.concat()); //concat的作用是拷贝一份放进All中,否则进去的是引用
            return;
        }
        for (var i = 0; i < rowNum; i++) {
            if (grids[iQueen][i] === -1) {
                grids[iQueen][i] = iQueen;
                posQueen.push([iQueen, i]);
                for (var j = 0; j < rowNum; j++) {
                    for (var k = 0; k < colNum; k++) {
                        if (grids[j][k] === -1 && (j === iQueen || k === i || (j + k) === (iQueen + i) || (j - k) === (iQueen - i))) {
                            grids[j][k] = iQueen;
                        }
                    }
                }
                this.findQueenPos(grids, iQueen + 1, posQueen, posQueenAll);
                // 回溯
                posQueen.pop();
                for (var j = 0; j < rowNum; j++) {
                    for (var k = 0; k < colNum; k++) {
                        if (grids[j][k] === iQueen) {
                            grids[j][k] = -1;
                        }
                    }
                }
            }
        }
    };
    return QueenService;
}());
QueenService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], QueenService);

//# sourceMappingURL=queen.service.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[168]);
//# sourceMappingURL=main.bundle.js.map