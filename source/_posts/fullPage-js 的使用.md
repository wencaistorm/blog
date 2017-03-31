---
title: fullPage.js 的使用
date: 2016-07-16 16:07:43
tags: 
    - jQuery
    - fullPage.js
categories: JavaScript
---

>fullPage.js 是一个基于 jQuery 的全屏滚动插件　[**效果展示**](http://wencaizhang.com/demo/fullPage/index.html)

<!-- more -->

## 一、引包

```html
<!-- 1. 引fullPage.css-->
<link rel="stylesheet" href="./lib/css/jquery.fullPage.css">
<!-- 2. 引jquery.js ，依赖于 jQuery -->
<script src="./lib/js/jquery-1.12.2.min.js"></script>
<!-- 3. 引fullPage.js-->
<script src="./lib/js/jquery.fullPage.js"></script>
```

## 二、HTML 代码
在一个大的 div 盒子里，如 id 为 `fullPage` 的 div，里面每个 css 类名为 `section` 的都是一个分屏
**id 可以任取，但类名是固定的**
```html
<div id="fullPage">
    <div class="section"> 这是第一屏 </div>
    <div class="section"> 这是第二屏 </div>
    <div class="section"> 这是第三屏 </div>
    <!-- 如果想加入一个幻灯片效果 -->
    <div class="section">
        <div class="slide">幻灯片一</div>
        <div class="slide">幻灯片二</div>
        <div class="slide">幻灯片三</div>
    </div>
</div>
```

## 三、javascript 代码
在入口函数内，选中 id 为 `fullPage` 的元素，执行 `fullpage()` 方法即可。

```js
$(function() {
    $("#fullPage").fullpage();
})
```

### 1、fullPage



### 可配置项
fullpage() 方法可以传参，参数为一个对象，常用的配置项如下
```json
    //配置背景颜色
    sectionsColor:['#BFDA00','#2EBE21','#2C3E50','#FF9900'], 

    //配置幻灯片切换是否显示箭头，默认true
    controlArrows:false, 

    //配置页面滚动速度,默认700
    scrollingSpeed:1000,

    //配置锚链接，不应该和autoScrolling，scrollBar一起使用
    anchors:['page1','page2','page3','page4'],

    //配置滚动到顶部之后是否从底部循环滚动，默认false
    loopTop:true,
    //相反从底部循环滚动，默认false
    loopBottom:true,

    //配置菜单
    menu:'#fullpageMenu'

    // 控制是否显示右侧导航
    navigation: true
```

[更多详细参数，参考这里](http://www.cnblogs.com/chinaun/p/4953121.html)


