---
title: 近期用到的 jQuery 方法整理
date: 2017-05-27 22:22:53
tags: 
- js
- jQuery
categories: JavaScript
---

好久不用 jQuery，已经快忘得差不多了。最近用 jQuery 写了不少页面，趁机总结一下。毕竟，好记性不如烂笔头。
<!--more-->

## 一、选择器部分
 
1. `$("input[type='radio']")` 选择不同 `type` 的 `input`
 
2. `$("input[type='radio']:checked")` 选择被选中的 `radio`
 
3. 选择父类元素
    + `$selector.parent('td')` 仅限于直接父类元素 `parent`
    + `$(this).parents('.content')` 只要是父类元素即可，能向父级多级查找 `parents`
 
4. 选择子类元素
    + `$ele.children('p.tip');`
    + `$this.siblings('.content').find('textarea')`
 
5. 选择兄弟元素 `$selector.parent('td').siblings('.title')`
 
 
## 二、插入和删除元素
 
### 1. 插入
 
1. 在被选元素的结尾插入内容
    > `$ele.append("<p class='tip red'> &nbsp;&nbsp;请选择</p>");`
 
2. 在被选元素的开头插入内容
    > `$(".must").prepend("<span class='red star'>*&nbsp;</span>");`
 
3. 在被选元素之前插入内容
    > `$('.item:eq(2)').before($('.milestone'));`
 
4. 在被选元素之后插入内容
    > `$('.item:eq(2)').after($('.milestone'));`
 
### 2. 删除
 
1. `remove()` 删除被选元素（及其子元素），可传入参数（选择器）作为过滤条件
    > `$tip.remove()` 或 `$("p").remove(".italic");`
 
2. `empty()` 删除被选元素的子元素
    > `$tip.empty()`
 
## 三、设置元素样式
 
## 四、动画
 
### 1. `animate` 动画使用固定值
 
```js
$dialog.animate({
    top: "60px"
})
```
 
### 2. `animate` 动画使用相对值
 
```js
$dialog.animate({
    top: "-=60px"
})
```
 
### 3. 判断当前是否有动画尚未执行完毕
+ 如果正在执行动画返回 `true`
    > `$(".box").is(":animated")`
 
 
## 五、获取和设置元素的值
 
1. 获取文本域的输入的内容
    > `var $val = $this.siblings('.content').find('textarea').val();`
 
2. 获取属性值
    > `var id = $(this).parents('.item').attr('id');`
 
## 六、其他的一些方法
 
1. 清空被选中的 `radio`
    > `$("input[type='radio']").removeAttr('checked');`
 
2. 判断 `radio` 是否被选中
    > `$(this).is(":checked")`
 
3. 判断元素是否具有指定的类名
    > `$(this).hasClass("bad")`
 
4. `jQuery` 对象有 `length` 属性，该属性表示选中的 `DOM` 元素的个数
    > `if($radiosChecked.length != 2) {}`
 
5. 判断选中元素是否为 `display:none` 状态
    > `if(!$(this).is(":hidden")) {}`
 
6. 序列化表单数据，用于 `ajax` 提交表单数据
    > `$('form').serialize()`
 
7. 输入框失去焦点
    > `$('input').blur(function () {});`
 