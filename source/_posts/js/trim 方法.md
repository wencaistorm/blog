---
title: trim 方法
tags:
  - JavaScript
categories:
  - JavaScript
abbrlink: bf9063ac
date: 2017-11-25 21:31:23
---

## 前言

> `trim()` 方法会从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR）。

删除字符串两端的空白字符可以说是非常常见的需求
<!--more-->
我通常用的是 jQuery 提供的 `$.trim()` 方法，但其实原生 JavaScript 已经提供了 `trim()` 方法，IE9 以上浏览器已经支持此方法，而且 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) 也已经提供了兼容旧环境的方法。

so，以后并不一定非要依赖第三方库，完全可以使用原生 tirm() 方法，或者自定义此方法的兼容写法。

## 通过正则简单实现：

```js
if(!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g,'');
  };
}
if(!String.prototype.trimLeft) {
  String.prototype.trimLeft = function () {
    return this.replace(/^\s+/,'');
  };
}
if(!String.prototype.trimRight) {
  String.prototype.trimRight = function () {
    return this.replace(/\s+$/,'');
  };
}
```
用到的正则：
1. `\s` 匹配任何空白字符
2. `+` 匹配至少 1 个元字符
3. `^` 字符串必须以指定的字符开始
4. `$` 字符串必须以指定的字符结束
5. `|` 或者
6. `g` 全局匹配

## more：
+ 更多的实现方式参考：[JavaScript trim函数大赏 - 司徒正美](http://www.cnblogs.com/rubylouvre/archive/2009/09/18/1568794.html)
+ MDN 文档：[String.prototype.trim() - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)