* 强类型语言和弱类型语言：一个变量一旦定义了类型就不能把别的类型的值赋值给它；
* 静态类型语言和动态类型语言：程序运行时才能确定变量的类型是动态，程序编译阶段就可以确定变量类型的是强类型语言
* npm  i typescript -g 全局安装ts编译器
* tsc -help  查看配置项 tsc: The TypeScript Compiler - Version 4.6.3   
* tsc --init 
* 类型注解：类型声明
* ts基本类型 Boolean,Number,String,Array,Tuple,Enum,Unknown,Any,Void,Null,Undefined,Never,Symbol,Ojbect 都要小写哦！
  * any 和 unknown 都是顶级类型，但是 unknown 更加严格，不像 any 那样不做类型检查，反而 unknown 因为未知性质，不允许访问属性，不允许赋值给其他有明确类型的变量；
* ts枚举类型：key-value键值对的值，且可以通过value找key，将页面中的常量或者有关系的变量和值作为一个枚举，使代码易读；枚举和枚举类型可以作为单独的类型存在的情况：1、枚举都没有初始值；2、枚举类型都是数字或者字符串；只有相同的枚举成员类型才可以比较；

* tsconfig
* 编译工具【ts-loader|@babel/preset-typescript】
* eslint【eslint+typescript-eslint|babel-eslint】
* 单元测试 【ts-jest|babel-jest】
* 
