---
title: JavaScript预解析总结
date: 2016-07-02 19:47:28
tags: JavaScript
categories: JavaScript
---

## JavaScript预解析机制
1. 全局作用域进行预解析
    - 先找到使用关键字 `var`  和 `function` 定义的变量和函数
    - 找到之后，把变量和函数提升到作用域最前面
2. 此时从上到下一行一行地执行代码

<!-- more -->

3. 执行到函数的时候，进入函数的局部作用域，此时在函数内部进行预解析
    - 找到用 `var` 定义的变量
    - 找到后，从上到下一行一行地执行代码
4. 在预解析的过程中（无论是全局作用域还是局部作用域），JavaScript会给提升的变量赋值undefined作为初始值，而把仍函数整体赋给函数作为初始值
5. 需要注意的就是当提升的变量名和提升的函数名相同时，函数的优先级要高于变量的优先级，也就是说当代码调用这个名字的变量（函数）的时候，而此时这个名字的变量（函数）还没有被赋值，那么就会调用提升的函数，而非提升的变量。

## 实例
![举个栗子](http://7xvule.com1.z0.glb.clouddn.com/exa.jpg)



```js
console.log(num);  // 此时num为undefined

var num = 10;

console.log(num);  // num 已经被赋值为10

fun(); 

function fun(){ 

    console.log(num);  // 在局部作用域有num变量，值为undefined

    var num = 20; 

    console.log(num);  // 局部作用域的num被赋值为20

}

console.log(num);  // 在这里访问不到局部作用域，只能访问全局作用域的变量num
```

- 作用域的问题：在局部作用域内，当调用某个变量的时候时候会首先在这个作用域内查询，如果这个作用域内有则

再来一个栗子
![](http://7xvule.com1.z0.glb.clouddn.com/exa.jpg)
```js
 var a = 18;

 f1();

 function f1(){

     var b=9;

     console.log(a);    //undefined

     console.log(b);    //9

     var a = '123';

 }
```
