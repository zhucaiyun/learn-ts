/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-22 17:36:14
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-22 17:56:14
 * @Description  : 类型检查机制
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