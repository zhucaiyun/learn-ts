"use strict";
/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-05-05 17:38:41
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-05-05 17:38:42
 * @Description  : 描述信息
 */
/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-29 17:57:15
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-29 17:57:16
 * @Description  : 描述信息
 */
let c = require('./a.node');
console.log(c); // {x:1,y:2}
let z = require('./c.node');
console.log(z); //{ a: { cx: 1, cy: 2 }, b: { cz: 1, cf: 2 } }
