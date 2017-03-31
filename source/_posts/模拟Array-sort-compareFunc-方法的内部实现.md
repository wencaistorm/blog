---
title: 模拟Array.sort(compareFunc)方法的内部实现
date: 2016-06-15 23:44:17
tags: 
- JavaScript
- 数组排序
categories: JavaScript
---
首先，我们写出冒泡排序对数组进行从小到大排序的函数
<!-- more -->
``` js
    // 从小到大对数组排序
    function sort(array) {
        for (var i = 0; i < array.length; i++) {
            //判断是否已经排序完成，先假设已完成
            var isSort = true;
            for (var j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    // 没有排好顺序，即前一项比后一项大，执行下面代码
                    // 没有排好，说明假设的不对
                    isSort = false;
                    var temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
            // isSort为true时证明已经排序完成，结束循环
            if (isSort) {
                break;
            }
        }
    }
 
    var arr = [2, 51, 9, 3, 7];
    sort(arr);
    console.log(arr);
```
    输出   `[2, 3, 7, 9, 51]`
-----------------------
现在，如果我想在保留从小到大排序函数的基础上，再写一个从大到小排序的函数，那么只需要在上面函数的基础上改动两个地方：
1. 将函数名改为sort2(或者其他)
2. 将内层循环的判断条件改为 array[j] < array[j + 1]
``` js
    // 从大到小对数组排序
    function sort(array) {
        for (var i = 0; i < array.length; i++) {
            //判断是否已经排序完成，先假设已完成
            var isSort = true;
            for (var j = 0; j < array.length - i - 1; j++) {
                if (array[j] < array[j + 1]) {
                    // 没有排好顺序，即前一项比后一项大，执行下面代码
                    // 没有排好，说明假设的不对
                    isSort = false;
                    var temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
            // isSort为true时证明已经排序完成，结束循环
            if (isSort) {
                break;
            }
        }
    }
 
    var arr = [2, 51, 9, 3, 7];
    sort(arr);
    console.log(arr);
```
 
输出 `[51, 9, 7, 3, 2]`
 
    -------------------------
不难发现，从小到大排序和从大到小排序的函数有很多相同的代码，而且功能相似。那么可以把这两个函数封装起来吗？
答案是肯定的。
 
两个函数唯一不同的是内层的判断语句，也就是说改变这个判断语句，就可以改变函数的功能，所以，我们可以把这个判断语句写成另一个函数作为排序函数的参数，这样一来，排序函数具体的排序方法就由这个参数决定。
 
``` js
function compareFunc(a, b) {
    return a - b;
}
 
function sort(array, fn) {
    for (var i = 0; i < array.length; i++) {
        //判断是否已经排序完成，先假设已完成
        var isSort = true;
        for (var j = 0; j < array.length - i - 1; j++) {
            if (fn(array[j],array[j + 1])) {
                // 没有排好顺序，即前一项比后一项大，执行下面代码
                // 没有排好，说明假设的不对
                isSort = false;
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
        // isSort为true时证明已经排序完成，结束循环
        if (isSort) {
            break;
        }
    }   
}
 
var arr = [2, 51, 9, 3, 7];
sort(arr, compareFunc)
```
 
输出 `[2, 3, 7, 9, 51]`
 
---------
综上，如果排序的标准发生改变，只需改变比价函数compare()的返回值即可。