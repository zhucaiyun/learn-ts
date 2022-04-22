/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-19 18:00:42
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-22 11:21:15
 * @Description  : 类的继承和成员修饰符
 */
class Dog { 
  constructor(private name: string) { 
    this.name = name
    this.legs = 4
    this.color = 'red'
  }
  // private name: string
  readonly legs: number //属性“legs”没有初始化表达式，且未在构造函数中明确赋值。
  protected color: string
  static run() {
    console.log(this.name)
    // this.legs = 6 // 只读
  }
  voice() { }
}
// 类成员的属性都是实例属性而不是原型属性
// 类成员？的方法都是实例方法
// 属性必须有初始值 属性可以可选属性
console.log(Dog.prototype) // run voice constructor
let myDog = new Dog('wang wang')
// myDog.color = 'brown' // 属性“color”受保护，只能在类“Dog”及其子类中访问。
// myDog.name="xiongmao" // 属性“name”为私有属性，只能在类“Dog”中访问。 
console.log(myDog) // legs: 4 name: "wang wang"
Dog.run()
// myDog.run() //属性“run”在类型“Dog”上不存在。你的意思是改为访问静态成员“Dog.run”吗?t
// 类的继承 extends super
class Husky extends Dog { 
  constructor( name: string) { 
    // 派生类的构造函数必须包含 "super" 调用。
    super(name)
    // this.tail = 'long' // this放到super后面
    // this.legs = 5 // 无法分配到 "legs" ，因为它是只读属性
  }
  color: string = 'black'
  tail: string ="long" // 派生类的构造函数必须包含 "super" 调用。
  getColor() {console.log(this.color)}
}

/*
* public：默认
* private
* protected
* static
*/


/*
* 抽象类：抽取公共的属性方法；实现多态
* 多态
* 
*/
abstract class Animal { 
  constructor(name: string) { 
    this.name = name
  }
  name: string
  abstract legs: number
  abstract getVoice(): void
  getColor(voice:string): void { 
    // 非abstract的必须有函数实体
    console.log(voice)
  }
}

// Cat = new Animal() // 无法创建抽象类的实例。
class Cat extends Animal { 
  constructor(public name:string) { 
    super(name)
  }
  legs: number = 4
  getVoice(): void { // 多态
    console.log('喵喵')
  }
  getEmotion(): void { 
    console.log('wild')
  }
}
let tom: Animal
tom  = new Cat('猫')
tom.getColor('orange')
// tom.getEmotion() // 类型“Animal”上不存在属性“getEmotion”。 let tom = new Cat('猫')

class Dahuang extends Animal { 
  legs: number = 4
  getVoice(): void {  // 多态
    console.info('汪汪')
  }
}
let dahuang = new Dahuang('狗')
let animals: Animal[] = [tom, dahuang]

animals.forEach(anItem => {
  anItem.getVoice()
});

// this链 方法的链式调用
class WorkFlow { 
  step1() { 
    console.log('1')
    return this
  }
  step2() { 
    console.log('2')
    return this
  }
  step3() { 
    console.log('3')
  }
}
// new WorkFlow().step1().step3().step2() //类型“void”上不存在属性“step2”。 
new WorkFlow().step1().step2().step3()
// this多态，可以指向子类或者父类
class Myflow extends WorkFlow { 
  next() { 
    return this
  }
}
console.log(new Myflow().next()) // Myflow
console.log(new Myflow().step1()) // Myflow
console.log(new Myflow().next().step1()) // Myflow  // 我理解这里都是子类的this吧

// 类和接口 接口只能约束类的共有成员 不能约束protected和private
interface animals { 
  legs: number;
  getVoice?():void
}

// 类实现接口
class Ani implements animals { 
  legs = 4 //private
  getVoice(): void {
    console.log('voice')
  }
}

interface bio extends animals { 
  type?: string;
  getTypes(): string;
}

class Bio implements bio { 
  getTypes() { 
    return 'fly'
  }
  legs = 2
}

class Sea { 
  size: string = 'big'
  private color: string = 'blue'
}

// 接口继承类
interface sea extends Sea { }

class allSea extends Sea implements sea {  
  size = 'small'
  // color = 'blue' // 如果不extends的话，类“allSea”错误实现接口“sea”。 属性“color”在类型“Sea”中是私有属性，但在类型“allSea”中不是。
}
// 接口会抽离类的私有成员和受保护成员