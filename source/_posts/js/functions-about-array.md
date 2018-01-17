---
title: 数组方法小盘点
date: 2018-01-14 13:08:14
tags: 
  - javascript 
  - array
categories:
  - Javascript 
---


## `Array.prototype.slice()` 
*// `slice` 词典翻译为：切片。这里大致可以理解为从数组上“切下来”一部分，或”提取“一部分*

### 描述：
> `array.slice(start, end)`

1. 影响范围：**不修改原数组，会返回一个新建的数组**
1. 返回值：返回一个**浅复制**了原数组中的元素的一个新数组，即如果元素为引用类型（对象），此对象发生改变，则新数组和原数组中的这个元素也会发生改变
1. 第一个参数（`start`）：
  + 从 `start` 指定的索引处开始“切片”
  + 如果 `start` 为负数，表示从原数组倒数第几个元素开始
  + 如果 `start` 省略，则从索引 0 开始
1. 第二个参数（`end`）：
  + 在 `end` 指定的索引处结束“切片”（但**不包含该元素**）
  + 如果 `end` 为负数，表示从原数组倒数第几个元素结束
  + 如果 `end` 被省略，则 `slice` 会一直提取到原数组末尾
  + 如果 `end` 大于数组长度，`slice` 也会一直提取到原数组末尾
1. 通过 `slice` 将类数组转化为数组

### 使用示例：
#### demo1：
提取原数组中第二个元素开始直到（**不包含**）第四个元素的所有元素（索引为 1，2 的元素）
```js
var arr = [ 1, 2, 3, 4 ];
var sliced = arr.slice(1, 3);

console.log(arr);     // [ 1, 2, 3, 4 ]
console.log(sliced);  // [ 2, 3 ]
```
#### demo2：
省略第二个参数 `end` ，提取原数组中第二个参数开始到（包含）末尾的所有元素（索引为 1，2，3 的元素）
```js
var arr = [ 1, 2, 3, 4 ];
var sliced = arr.slice(1);

console.log(arr);     // [ 1, 2, 3, 4 ]
console.log(sliced);  // [ 2, 3, 4 ]
```
#### demo3：
两个参数都省略，提取原数组所有元素
```js
var arr = [ 1, 2, 3, 4 ];
var sliced = arr.slice();

console.log(arr);     // [ 1, 2, 3, 4 ]
console.log(sliced);  // [ 1, 2, 3, 4 ]
```
#### demo4：
转为类数组(`arguments`)为数组
```js
function list() {
  var args = [].slice.call(arguments)
  console.log(args);  // [ 1, 2, 3]
}

var list1 = list(1, 2, 3);
```
