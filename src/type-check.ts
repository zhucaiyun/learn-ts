/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-22 17:36:14
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-24 11:43:31
 * @Description  : 类型检查机制
 * X兼容Y：x(目标类型) = y（源类型）
 */
// 类型推断，默认都会有
// 类型断言
interface foo { 
  bar: number
}
let newfoo = {} as foo // 类型断言
console.log(newfoo.bar) // 这样其实用下来有问题 因为根本就没有bar属性

let newfoo1: foo = { bar: 1 } // good

let defaultvar = 1 // 类型推断

// 类型兼容
let s: string = 'a'
s = null //  "strictNullChecks": false|true,

// 接口兼容性
interface X { 
  a: any;
  b: string;
  c: number
}

interface Y { 
  a: number,
  b: string
}

let x: X = { a: [1,2,3], b: 'c', c: 1 }
let y: Y = { a: 1, b: 'c' }
y = x // x中有y就可以了 x多于y  鸭式辨型法

// 函数兼容性
// 固定参数
// 参数个数

// 可选参数和剩余参数


//  参数类型


// 返回值类型


// 枚举兼容性
 


// 类型保护机制: 类型断言；instanceof，in，typeof等做判断


// 类型断言:这些都是让函数。类等更灵活的一些兼容性，推论或者保护