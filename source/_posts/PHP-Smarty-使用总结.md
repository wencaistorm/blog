---
title: PHP Smarty 使用总结
date: 2017-05-27 22:46:00
tags: 
    - php
    - smarty
categories: PHP
---

模板引擎

<!--more-->

## PHP 分配数据

```php
// 分配数据到指定的模板文件
$smarty -> assign('student', $stu);
$smarty -> display('smarty.html');
```

```html
{$student}
```

## 遍历

```html
<!-- 遍历数组 $people，每次循环索引复制给 $k，对应的值赋值给 $v -->
{foreach $people as $k => $v}
    键：{$k}---值：{v}
{foreach}
    <!--如果数据为空的时候，我们通常会提示”没有找到您查找的数据”-->
    没有找到您查找的数据
{/foreach}
```

## 条件判断

```html
{if $money >= 50}
    一碗豆浆，两个油条。
{elseif $money >= 100}
    买两碗豆浆，喝一碗，倒一碗。
{else}
    回家睡觉！
{/if}
```

## 强制不使用 smarty 语法解析

```js
{literal}
// 在使用字面量创建对象时很有用
var student = {
    name: 'xiaoming',
    age: 18
}
{/literal}
```

## 日期
## 配置文件