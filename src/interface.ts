/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-18 14:08:55
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-18 17:21:01
 * @Description  : 接口
 */
interface list { 
  readonly id: number; // 只读属性
  name?: string;
  age?: number // 可选属性
  // [x: string]: any; // 留一个空间 变量string 值是any类型
}

interface Result { 
  // data: list[] // 元素类型后面+[]表示由此类型元素组成的一个数组
  data: Array<list>
}

function render(result: Result) { 
  result.data.forEach(item => {
    console.log(item)
    if (item.age) {  // 类型“list”上不存在属性“age”。
      console.log('age', item.age)
      item.name = item.name || '' + item.age
      // item.id = item.id+item.age // 无法分配到 "id" ，因为它是只读属性
    }
  });
}

let result = {
  data: [
    { id: 1, name: 'yue', age: 10 },
    { id: 2 },
    // {name: 'lin'} // id类型不兼容
  ]
}
// 3种方式解决对象字面量中属性的不确定性
render(result) // 1

// 字面量是一个集体类型中更为具体的一种子类型 不能 对象字面量
// render({
//   data: [
//   { id: 1, name: 'yue', age: 10 }, // 未在接口中定义的age会报错
//   { id: 2 },
//   // {name: 'lin'} // id类型不兼容
// ]})

// render({
//   data: [
//   { id: 1, name: 'yue', age: 10 }, // 未在接口中定义的age会报错
//   { id: 2 },
//   // {name: 'lin'} // id类型不兼容
// ]} as Result) // 2

render(<Result>{
  data: [
  { id: 1, name: 'yue', age: 10 }, // 未在接口中定义的age会报错
  { id: 2 },
  // {name: 'lin'} // id类型不兼容
  ]
})

// 数字索引的对象和字符串索引的对象
interface StringArray { 
  [index: number]: string
}
let a:StringArray = ['a',]
let b: StringArray = {
  1: 'a',
  2: 'b'
}

interface NumberString { 
  [s: string]: string;
  h: string; // ok 两种索引签名是可以混用的
  // y: number // 类型“number”的属性“y”不能赋给“string”索引类型“string”。
  // [x: number]: boolean //“number”索引类型“boolean”不能分配给“string”索引类型“string”。
}



// 接口定义函数

// 1、变量定义
let add: (x: number, y: number) => number = function (a: number, b: number):number { 
  return a+b
}

// 2、接口定义
interface Add { 
  (a:number,b:number):number
}
<Add> function sum(x:number, y:number) { 
  return x+y
}
let sum1: Add = (x, y) => x + y

// 类型别名
type Sum = (a: number, b: number) => number
let add1: Sum = (a, b) => a + b

// 
// 实现 implements

// 继承 extends