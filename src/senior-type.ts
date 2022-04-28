/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-24 11:44:27
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-24 17:46:22
 * @Description  : 高级类型-交叉
 */
// 交叉类型，取并集 
interface intersectionType1 { 
  run(): void;
  name: string
}

interface intersectionType2 { 
  walk(): void;
  age: number
}

let intersection: intersectionType1 & intersectionType2 = {
  run() { 
    console.log('run')
  },
  name: 'hh',
  walk() { 
    console.log('walk')
  },
  age: 12
}

// 混入
function extend<T, U>(first: T, second: U):T&U { 
  let result = <T & U>{};
  for (let id in first) { 
    (<any>result)[id] = (<any>first)[id]
  }
  for (let id in second) { 
    if (!result.hasOwnProperty(id)) { 
      (<any>result)[id]=(<any>second)[id]
    }
  }
  return result
}

// 联合类型 取交集
function padLeft(value: number, padding: string | number) { 
  // ...
}
let uniontype: string | number
uniontype = 1
let uniontype1: 1 | 2 = 2 // 字面量范围

// 类型保护与区分类型

// 索引类型 keyof T 所有