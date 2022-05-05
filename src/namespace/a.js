"use strict";
/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-29 18:24:56
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-29 18:24:56
 * @Description  : 命名空间的内容不能作为模块引入，只能作为全局引入
 */
/// <reference path="./b.ts" />
var Shape1;
(function (Shape1) {
    function square(x) {
        return x * x;
    }
    Shape1.square = square;
    function noExportSquare(x) {
        return x * x;
    }
})(Shape1 || (Shape1 = {}));
console.log(Shape1.circle(1));
console.log(Shape1.square(2));
// 命名别名
var circle = Shape1.circle;
console.log(circle(3));
