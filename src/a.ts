/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-29 18:24:56
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-29 18:24:56
 * @Description  : 命名空间的内容不能作为模块引入，只能作为全局引入
 */

/// <reference path="./b.ts" />
namespace Shape {
  export function square(x:number) {
    return x*x
  }
  function noExportSquare(x:number) {
    return x*x
  }
}
// console.log(Shape.circle(1))
// console.log(Shape.square(2))

// 命名别名
// import circle = Shape.circle
// console.log(circle(3))