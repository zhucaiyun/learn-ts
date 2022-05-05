"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-05-05 10:32:12
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-05-05 11:09:40
 * @Description  : 配置相关的文件
 */
let ca = 'hh';
console.log(ca);
/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-19 18:00:42
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-24 09:54:54
 * @Description  : 类的继承和成员修饰符
 */
class Dog {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.legs = 4;
        this.color = 'red';
    }
    static run() {
        console.log(this.name);
        // this.legs = 6 // 只读
    }
    voice() { }
}
// 类成员的属性都是实例属性而不是原型属性
// 类成员？的方法都是实例方法
// 属性必须有初始值 属性可以可选属性
console.log(Dog.prototype); // run voice constructor
let myDog = new Dog('wang wang');
// myDog.color = 'brown' // 属性“color”受保护，只能在类“Dog”及其子类中访问。
// myDog.name="xiongmao" // 属性“name”为私有属性，只能在类“Dog”中访问。 
console.log(myDog); // legs: 4 name: "wang wang"
Dog.run();
// myDog.run() //属性“run”在类型“Dog”上不存在。你的意思是改为访问静态成员“Dog.run”吗?t
// 类的继承 extends super
class Husky extends Dog {
    constructor(name) {
        // 派生类的构造函数必须包含 "super" 调用。
        super(name);
        this.color = 'black';
        this.tail = "long"; // 派生类的构造函数必须包含 "super" 调用。
        // this.tail = 'long' // this放到super后面
        // this.legs = 5 // 无法分配到 "legs" ，因为它是只读属性
    }
    getColor() { console.log(this.color); }
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
*/
class Animal {
    constructor(name) {
        this.name = name;
    }
    getColor(voice) {
        // 非abstract的必须有函数实体
        console.log(voice);
    }
}
// Cat = new Animal() // 无法创建抽象类的实例。
class Cat extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
        this.legs = 4;
    }
    getVoice() {
        console.log('喵喵');
    }
    getEmotion() {
        console.log('wild');
    }
}
let tom;
tom = new Cat('猫');
tom.getColor('orange');
// tom.getEmotion() // 类型“Animal”上不存在属性“getEmotion”。 let tom = new Cat('猫')
class Dahuang extends Animal {
    constructor() {
        super(...arguments);
        this.legs = 4;
    }
    getVoice() {
        console.info('汪汪');
    }
}
let dahuang = new Dahuang('狗');
let animals = [tom, dahuang];
animals.forEach(anItem => {
    anItem.getVoice();
});
// this链 方法的链式调用
class WorkFlow {
    step1() {
        console.log('1');
        return this;
    }
    step2() {
        console.log('2');
        return this;
    }
    step3() {
        console.log('3');
    }
}
// new WorkFlow().step1().step3().step2() //类型“void”上不存在属性“step2”。 
new WorkFlow().step1().step2().step3();
// this多态，可以指向子类或者父类
class Myflow extends WorkFlow {
    next() {
        return this;
    }
}
console.log(new Myflow().next()); // Myflow
console.log(new Myflow().step1()); // Myflow
console.log(new Myflow().next().step1()); // Myflow  // 我理解这里都是子类的this吧
// 类实现接口
class Ani {
    constructor() {
        this.legs = 4; //private
    }
    getVoice() {
        console.log('voice');
    }
}
class Bio {
    constructor() {
        this.legs = 2;
    }
    getTypes() {
        return 'fly';
    }
}
class Sea {
    constructor() {
        this.size = 'big';
        this.color = 'blue';
    }
}
class allSea extends Sea {
    constructor() {
        super(...arguments);
        this.size = 'small';
        // color = 'blue' // 如果不extends的话，类“allSea”错误实现接口“sea”。 属性“color”在类型“Sea”中是私有属性，但在类型“allSea”中不是。
    }
}
// 接口会抽离类的私有成员和受保护成员 
define("es6/a", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.c = exports.d = void 0;
    /*
     * @Author       : zhucaiyun1@xdf.cn
     * @Date         : 2022-04-29 17:19:41
     * @LastEditors  : zhucaiyun1@xdf.cn
     * @LastEditTime : 2022-05-05 10:09:22
     * @Description  : 模块化解决：commonJs es6的模块化 尽量不要混用两个模块 也有兼容的处理方式 尤其是对于默认导出的情况
     */
    /*
    * 模块化：
    *
    */
    exports.d = 1;
    exports.c = 'defaults';
    exports.default = exports.c;
});
/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-29 17:19:47
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-29 17:19:47
 * @Description  : commonJs es6的模块化
 */
define("es6/c", ["require", "exports", "es6/a", "es6/a"], function (require, exports, All, a_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.a = void 0;
    All = __importStar(All);
    a_1 = __importDefault(a_1);
    console.log(All);
    console.log(a_1.default);
    exports.a = All;
});
// export = function() {
//   console.log('i)
// }
/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-29 18:25:00
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-29 18:25:00
 * @Description  : 描述信息
 */
var Shape1;
(function (Shape1) {
    function circle(x) {
        return Math.PI * x * x;
    }
    Shape1.circle = circle;
})(Shape1 || (Shape1 = {}));
/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-29 18:24:56
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-29 18:24:56
 * @Description  : 命名空间的内容不能作为模块引入，只能作为全局引入
 */
/// <reference path="./b.ts" />
var Shape1;
(function (Shape1) {
    function square(x) {
        return x * x;
    }
    Shape1.square = square;
    function noExportSquare(x) {
        return x * x;
    }
})(Shape1 || (Shape1 = {}));
console.log(Shape1.circle(1));
console.log(Shape1.square(2));
// 命名别名
var circle = Shape1.circle;
console.log(circle(3));
