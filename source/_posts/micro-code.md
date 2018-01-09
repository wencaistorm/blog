---
title: 微代码
tags:
  - code
categories: code
abbrlink: 6f49a3ac
date: 2017-11-19 20:20:53
---

常用代码段，样式代码为主。
<!--more-->
 
### 光标形状
 
1. 小手  `cursor: pointer;`
2. 等待  `cursor: wait;`
 
 
### C3属性 禁用 `onclick` 事件
[CSS3 pointer-events:none应用举例及扩展](http://www.zhangxinxu.com/wordpress/2011/12/css3-pointer-events-none-javascript/)
 
`point-events: auto;`
 
 
### 网页被选中文字的背景颜色
```css
::selection {
    background-color: green;
    color: pink;
}
```
 
### 修改`placeholder`文本的样式
```css
input::-webkit-input-placeholder {
    color: #ccc;
    letter-spacing: 2px;
    font-size: 20px;
}
```
 
### 文本间距
`letter-spacing: 2px;`
 
 
### 去掉 input 的外边线
`outline: none;`
 
 
### select 的 option 选项文本默认左对齐，通过以下是属性设置居中
 
```css
select {
    text-align: center;
    /* 单独一个 text-align 没有效果 */
    text-align-last: center;
}
```
 
### 点击自身以外的地方，关闭弹出层(待定)
```js
$("body").click(function() {
    if($(".ele")){
        $(".ele").hide();
    }
})
```
 
### 移动端的问题
 
1. iOS/安卓默认样式的不同，如select、a链接
2. font-size 小于 10px 时候，height 等于 line-height 无法将单行文本居中
3. input 和 fixed定位的冲突 [Web移动端Fixed布局的解决方案](http://efe.baidu.com/blog/mobile-fixed-layout/)
4. 图片
5. 长度单位(px/em/rem)
 
 
### 原生组件样式设置问题，如 `input`
 
主要思路为隐藏原生组件的样式，设置 `label` 标签的样式
 
或者是通过定位、不透明度和层级等属性将原生组件和自定义样式的 `div` 位置重合，做一个样式的障眼法
 
 
### 禁止用户选中文本
 
```css
div {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
```
 
### 多余文本显示省略号
 
```css
width: 100px; /* 固定宽度 */
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```

### 双伪元素清除浮动
```css
.clearfix:after, .clearfix:before {
    content: "";
    display: table;
    clear: both;
}
.clearfix {
    zoom: 1;
}
```

### 伪元素清除浮动
```css
.clearfix:after {
    content:"";
    height: 0;
    line-height: 0;
    display: block;
    visibility:hidden;
    clear:both;
}
.clearfix {
    zoom: 1;/*用来兼容ie浏览器*/
}
```
