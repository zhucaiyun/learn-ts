/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-15 15:59:36
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-18 13:57:02
 * @Description  : 描述信息
 */
import './enum.ts'
let hello: string = 'hello world' // var hello = 'hello world';

// document.querySelectorAll("#app")[0].innerHTML = hello

document.getElementById("app")!.innerHTML = hello  // 赋值表达式的左侧不能是可选属性访问。 //加一个!，感叹号什么意思呢，它其实是not null 的断言操作符，不执行运行时检查，告诉编译器只需要知道这个东西
 