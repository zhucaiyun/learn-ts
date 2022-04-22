/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-22 11:27:47
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-22 17:33:49
 * @Description  : 泛型：不预先确定的数据类型，具体类型在使用的时候才能确定 但是类型之间会有约束关系
 * 函数或者类支持多种数据类型的场景 
 * 函数和类可以轻松的支持多种类型，增强程序的扩展性
 * 不必写多条函数重载，冗长的联合类型声明，增强代码的可读性
 * 灵活控制类型之间的约束
*/
/* 同类型函数，只是参数类型不一样*/
// 函数重载
function log(value: string): number
function log(value: number): string
function log(value: any): any { 
  return value
}
log('a')

// 联合类型 mark
function log1 (value: string | number): number | string { 
  console.log(value)
  return value
}

// 如果类型是所有类型的话 但没有类型的约束关系 比如入参和返回的参数一致
function log2(value: any): any { 
  return value
}


// 泛型函数
function log3<T>(value: T): T { 
  return value
}

log3('2')
log3<number>(1)

// 泛型 类型别名定义函数类型
// type log4<T> = (value: T) => T
type log4= <T>(value: T) => T

// 类型别名怎么调用呢
// function log4(val:string) { return log4 }
let excuteLog4: log4 = (val) => { return val}
// let excutelog4: log4 = log3 // 咋复制呢

// 泛型数组类型
function log5<T>(arg: T[]): T[] { 
  console.log(arg.length)
  return arg
}
// 泛型接口  
interface Log { 
  <T>(arg: T):T
}
let log6: Log = (val) => { 
  return val
}
log6(1)

// 把泛型整体当做一个接口
interface log7<U> { 
  <U>(arg: U): U;
  name: string;
  // types: U;
}

// let mylog6: log7<number> = log // bingo
let mylog6: log7<string> = (val) => { return val} // bingo
// let mylog6: log7<number> = (val: number) => number // 怎么给一个变量赋值泛型呢？？？
// mylog6.types = 1
// mylog6.name = 'hha'

// 泛型类 泛型不能应用于类的静态成员 让类在约束中更自由
class LOG<T> { 
  run(value: T) { 
    console.log(value)
    return value
  }
}

let log8 = new LOG<number>()
// log8.run('run')
log8.run(1)

// 类型约束
interface len{ 
  length: number
}
function getLen<T extends len>(val:T){
  return `${val}'s length is ${val.length}` // 类型“T”上不存在属性“length”。
}
getLen({ length: 1 })
getLen('12')