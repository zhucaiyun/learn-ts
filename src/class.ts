/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-19 18:00:42
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-20 17:20:18
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
// 类成员的属性都是实例属性而不是原型属性
// 类成员？的方法都是实例方法
// 属性必须有初始值 属性可以可选属性
console.log(Dog.prototype) // run voice constructor
let myDog = new Dog('wang wang')
console.log(myDog) // legs: 4 name: "wang wang"

// 类的继承 extends super
class Husky extends Dog { 
  constructor(name: string) { 
    // 派生类的构造函数必须包含 "super" 调用。
    super(name)
    // this.tail = 'long' // this放到super后面
  }
  color: string = 'black'
  tail: string ="long" // 派生类的构造函数必须包含 "super" 调用。
}

/*
* public
* private
* protocol
*/
