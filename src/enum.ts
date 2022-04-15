/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-15 17:23:16
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-15 18:24:24
 * @Description  : 枚举类型 enum
 * https://www.typescriptlang.org/play?#code/PTAEi+9Q66MA3lHnrQZCMMdyhAD0L8JrBOpoADlCyCQKAFMA7AVwFtQAlAewBsDQBvUPUKgUQBFQBeUARgA0rUACEAMgFV2wtgHFK7dgDlZoAOoAJAJIAVdngC+eAMbUiAZzoEAdLWoBzABQ16ASiA
 */
// 数字枚举 - 反向映射
enum Role { 
  RED = 1,
  BLUE,
  GREEN,
  WHITE
}
console.log(Role)
// 字符串枚举
enum Answer { 
  Name='zhucaiyun',
  gender='female'
}
// 异构枚举
enum MixType { 
  N,
  Name = 'Judy',
  age = 18
}
// 各种枚举类型
/*
var Char;
(function (Char) {
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 4] = "c";
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '123'.length] = "e";
    Char[Char["f"] = 4] = "f"; // ？？？
})(Char || (Char = {}));
*/
enum Char { 
  a,
  b = Char.a,
  c = 1 + 3,
  d = Math.random(),
  e = '123'.length,
  f = 4
}

// 常量枚举
const enum Month { 
  yi,
  er,
  san
}
let mon = [Month.yi,Month.er,Month.san] // let mon = [0 /* yi */, 1 /* er */, 2 /* san */];
