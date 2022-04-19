/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-19 18:00:42
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-19 18:12:35
 * @Description  : 类的继承和成员修饰符
 */
class Dog { 
  constructor(name: string) { 
    this.name = name
    this.legs = 4
  }
  name: string
  legs: number //属性“legs”没有初始化表达式，且未在构造函数中明确赋值。
  run() { }
  voice() { }
}
console.log(Dog.prototype)