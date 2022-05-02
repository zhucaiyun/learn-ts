/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-29 17:19:51
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-29 17:55:05
 * @Description  : commonJs es6的模块化
 */
// import './es6/c'
import * as All from './a'
import cc from './a'
console.log(All)
console.log(cc)

export let a = All

// export = function() {
//   console.log('i)
// }