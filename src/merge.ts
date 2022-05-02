// 声明合并

// 接口合并
interface I {
  x: number;
  y:string;
  foo(a: string):number;
  foo(a:'a'):string
}
interface I {
  x: number;
  z: string;
  foo(a: number):number
  foo(a: string): string
}
// 同一个接口相同属性的类型必须一致 
// 后面接口优先于前面的接口声明；接口里面是按照顺序来声明的；但是常量函数会最优先声明
let ia:I = {
  x: 1,
  y: '1',
  z: '1',
  foo(x:any){ // 实例函数类型范围必须大于重载函数
    return x
  }
}
//命名空间可以类，函数，枚举进行合并
// ？？ TODO 命名空间和类 函数合并为什么要放到类和函数之后声明呢？？
// 命名空间声明不能位于与之合并的类或函数前ts(2434)
function Libs() {}
namespace Libs {
  export let version ='1'
}
console.log(Libs.version)

// "use strict";
// function Libs() { }

// (function (Libs) {
//     Libs.version = '1';
// })(Libs || (Libs = {}));
// console.log(Libs.version);

class Colors {
  red:string = 'red'
}
namespace Colors {
  export function getcolor(x:string) {return x}
}
console.log(new Colors()) 

enum Colour {
  'green',
  'purple'
}
namespace Colour {
  export function getGlod(x:string) {return x}
}
console.log(Colour)