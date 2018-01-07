---
title: React 中阻止事件冒泡
tags:
  - React
  - JavaScript
categories:
  - React
abbrlink: 9bcb3406
date: 2017-11-19 20:20:53
---

react 和原生 JavaScript 阻止事件冒泡的方式是否相同？
<!--more-->
TODO
## 问题描述
```
???
e.preventDefault(); // 方法阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）。但不阻止事件的冒泡传播
e.stopPropagation() // 阻止事件的冒泡传播，但不阻止其默认行为
returne false;      // 阻止两者
e.preventDefault();
e.stopPropagation();
e.nativeEvent.stopImmediatePropagation();
```
## 原因

## 解决办法
