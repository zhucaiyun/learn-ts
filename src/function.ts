/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-19 10:09:18
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-19 18:00:01
 * @Description  : 函数
 */
// 函数的定义
function plus (x: number, y: number) { 
  return x+y
}

// 变量定义 咋写呢
// let plus1 = (x: number, y: number) => { }
let plus1: (x: number, y: number) => number

// 类型定义
type plus2 = (x: number, y: number) => number

// 接口定义
interface plus3 { 
  (x:number,y:number):number
}

// 可选参数 
// function plus4(x?: number, y: number) { // 必选参数不能位于可选参数后
function plus4(x: number, y?: number) { 
  return y?x+y:x
  // return x?x:y?y:0
}

// 默认参数
function plus6(x: number, y = 1, z: number, d = 1) { 
  return x+y+z+d
}
console.log(plus6(1, undefined, 2)) // 必选参数前的可选参数如果要默认的话就需要传入undefined

// 剩余参数
function plus5(x: number, ...y: number[]) { 
  return x+y.reduce((pre,cur)=>pre+cur)
}
console.log(plus5(1, 3, 0, 4, 2))

// 函数重载 在定义重载的时候，一定要把最精确的定义放在最前面。
function plus7(...x: number[]): number
// { 
//   return x.reduce((pre,cur)=>pre+cur)
// }
function plus7(...x: string[]): string
// { 
//   return x.join('')
// }
function plus7(...x: any[]) { 
  if ( typeof x[0] === 'number') { 
    return x.reduce((pre,cur)=>pre+cur)
  }
  if (typeof x[0] === 'string') { 
    return x.join('')
  }
  console.log(x)
}
console.log(plus7(1, 3, 4))
// console.log(plus7(undefined))// 只能取number，string




