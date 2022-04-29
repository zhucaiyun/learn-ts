/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-24 11:44:27
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-29 17:17:37
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
uniontype = 'hh'
// uniontype = falsess
let uniontype1: 1 | 2 = 2 // 字面量范围

// 类型保护与区分类型

// 索引类型 keyof T  联合类型
interface Cow { 
  name: string;
  age: number
}
let ox: Cow = {
  name: '牛',
  age: 1
}
function getValue(val:any, key:string[]) { 
  return key.map(item => { 
    return val[item]
  })
}
console.log(getValue(ox, ['name', 'age'])) // '牛' 1
// 首先是 keyof T， 索引类型查询操作符。 对于任何类型 T， keyof T的结果为 T上已知的公共属性名的联合。
let keyss: keyof Cow
console.log(keyss) // undefined
// 泛型
function getVal<T, K extends keyof T>(val: T, key: K[]):T[K][] { 
  return key.map(item => val[item])
}
console.log(getVal(ox, ['name','age']))

// 没弄清楚联合类型和交叉类型，但是索引类型应用于泛型挺好的限制了对象的属性的范围

// 映射类型：TypeScript提供了从旧类型中创建新类型的一种方式 node_modules/typescript/lib/lib.es5.d.ts
// 同态 不创建新的属性
interface BaseInterface { 
  a: number,
  b: string
}
// 用类型别名定义
// type ReadonlyBase<T> = {readonly [P in keyof T]:T[P]}
type ReadonlyBase = Readonly<BaseInterface>
// 可选类型
type ParitalBase = Partial<BaseInterface>

type PickBase = Pick<BaseInterface, 'a' | 'b'> // 同态

// 不同态
type RecordBase = Record<'a'|'b', string|number|boolean>



// 条件类型
interface Maths { 
  c: number,
  d: string[]
}
class A { 
  math: true;
  english: true;
  biology: false;
  getLike() { 
    return 'like biology'
  }

}
class B { 
  name: 'subject';
  getGrade() { 
    return 'er'
  }
}

// type ExcludeBase = Exclude<BaseInterface, string> // 'b' type Exclude<T, U> = T extends U ? never : T;
type ExcludeBase = Exclude<'a' | 'e' | 'd', 'a' | 'b'> // 'e'|'d'


/* extends 咋用的呢 什么情况下是这样的判断呢 
* 原来extends还可以作为条件类型关键字，T extends U ? X : Y 【如果T包含的类型 是 U包含的类型的 '子集'，那么取结果X，否则取结果Y】
* https://juejin.cn/post/6844904146877808653
*/
// console.log(class c extends class B?'a':'b')
// 类型过滤 泛型  T extends string 这个怎么是boolean呢？
type TypeName<T> = 
  T extends string ? 'string' :
  T extends number ? 'number' :
  'obj'
type T1 = TypeName<string> //  string
type T2 = TypeName<string[]> // obj

// 联合类型的条件判断
// (A|B) extends U ?X: Y  === (A extends U?x:y)|(B extends U?x:y)
type T3 = TypeName<string | string[]> // string|obj
type Diff<T, U> = T extends U ? never : T // 找差值，如果U里面没有T 那么就输出T
type t33 = Diff<'a' | 'b' | 'e', 'a' | 'e' | 'd'> // 'b'
type NoteNull<T> = Diff<T, undefined | null>

type T5 = NoteNull<null | undefined | 'a'|string|number> // string|number

// Exclude<T,U> NonNullable<T> Extract<T,U> ReturnType<> ....
