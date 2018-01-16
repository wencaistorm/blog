---
title: 小tips: 利用 `localStorage` 记住用户名和密码
tags:
  - javascript
  - localStorage
categories:
  - JavaScript
date: 2018-01-16 17:35:53
---

对于一个登录页面，通常都要支持的一个功能是记住密码，这样下次打开时就不需要重新输入，可以很好的提高用户体验。

在对比了 `cookie` 和 `localStorage` 之后，我选择了 `localStorage` 用于存储用户登录信息。

1. `cookie`
    + 所有浏览器都支持，无兼容问题
    + 大小限制：4k 左右
    + `cookie` 会被附加到每个 HTTP 请求中
    
      ![](http://p2btijoky.bkt.clouddn.com/18-1-16/99013211.jpg)
    + 可设置失效时间

1. `localStorage`:
    + IE8+ （现在项目也基本都不要求兼容 IE6~7 了，因此可以放心使用）
    + 大小限制：一般 5MB
    + 仅在客户端中保存，不参与和服务器的通信
    + 需手动清除，否则永远有效

*`sessionStorage` 和 `localStorage` 基本只有一点不同：`sessionStorage` 是基于会话的，页面关闭或浏览器关闭后失效*

## 实例展示
实际的登录页面可能还需要注册，所以就单独做了一个高保真的 demo 页面。

您可以狠狠地点击这里：[HTML5 localstorage本地存储应用demo](http://demo.wencaizhang.com/pages/remember-pwd-by-localStorage.html)

进入 demo 页面，您可以看到两个输入框和一个登录按钮。

![](http://p2btijoky.bkt.clouddn.com/18-1-16/94959878.jpg)

您可以随心所欲的输入一个狂拽炫酷的用户名和密码，然后点击登录按钮，由于此 demo 仅用于展示记录密码功能，因此页面并无任何提示或跳转。

*在真实的场景中，点击按钮时应验证用户名密码，验证通过之后自动跳转到网站其他页面，与本文主题无关，故不做展示*

点击登录按钮之后，刷新页面，输入框已经自动填充刷新之前点击按钮时对应的值。

![](http://p2btijoky.bkt.clouddn.com/18-1-16/11381239.jpg)

## localStorage 提供的方法
*此处只是简单介绍，详细使用请看[这里](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)*
### 设置值
1. 用来创建新数据项和更新已存在的值
1. 接受两个参数——要创建/修改的数据项的键，和对应的值
```js
window.localStorage.setItem(key, value);
```
### 获取值
1. 获取一个数据项
1. 接受数据项的键作为参数，并返回数据值
```js
window.localStorage.getItem(key);
```
### 删除值
1. 接受一个参数——你想要移除的数据项的键，然后会将对应的数据项从域名对应的存储对象中移除
```js
window.localStorage.removeItem(key);
```
### 清空域名对应的整个存储对象
1. 不接受参数，只是简单地清空域名对应的整个存储对象
```js
window.localStorage.clear();
```
### 监听 `localStorage` 的变化
1. 创建/更新/删除数据项时触发
1. 重复设置相同的键值不会触发该事件
1. Storage.clear() 方法至多触发一次该事件
```js
window.addEventListener('storage', function(e) {
    // localStorage 发生改变时，事件对象包含了多个有用的属性信息
    console.log(e.key);          // 改变的数据项的键
    console.log(e.oldValue);     // 改变前的旧值
    console.log(e.newValue);     // 改变后的新值
    console.log(e.url);          // 改变的存储对象所在的文档的 URL
    console.log(e.storageArea);  // 存储对象本身
});
```

## 具体实现
1. 数据存储
每次用户点击一次登录按钮，记录下当前使用的用户名和密码。例如，放到一个对象中，然后存储之，代码如下：
```js
var userData = {
    username: '张君宝',
    pwd: '123456',
}
window.localStorage.setItem('userData', JSON.stringify(userData));
```

2. 数据读取
每次页面加载的时候，将相对应的数据读出来。如下：
```js
var userData = window.localStorage.getItem('userData');
userData = JSON.parse(userData);
```

需要注意的是：实际上 `localStorage` 存储的是字符串，因此我们需要 `JSON.stringfy()` 和 `JSON.parse()` 对数据进行处理

## 最后
更多阅读：
+ [使用 Web Storage API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
+ [localStorage 还能这么用](https://iammapping.com/the-other-ways-to-use-localstorage/)
