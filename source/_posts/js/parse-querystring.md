title: 小tips-使用正则获取查询字符串参数
author: wencaizhang
tags:
  - javascript
  - 查询字符串
  - 正则
categories:
  - JavaScript
date: 2018-01-17 21:39:00
---
## 什么是查询字符串

如图所示，当我们用百度搜索关键字 `regexp` 时，地址栏中 `?` 后面的字符串就叫查询字符串。

也就是说，`https://www.baidu.com/s?ie=UTF-8&wd=regexp` 中的 `ie=UTF-8&wd=regexp` 叫做查询字符串。

![](http://p2btijoky.bkt.clouddn.com/18-1-17/49356156.jpg)

使用查询字符串的场景随处可见，如上面的网页地址中的查询查询字符串，还有 `HTTP` 协议中的 `GET` 请求也是将参数拼接成查询字符串的形式。

![](http://p2btijoky.bkt.clouddn.com/18-1-17/93443448.jpg)

对于前端而言，需要做的就是把获取地址栏中的查询字符串即要查询的内容，然后通过 `GET` 请求拿到查询结果，展示到页面中。

那么就有这么一个过程：将查询字符串解析成方便处理的 `json` 对象，再将处理后的 `json` 对象转化成查询字符串

## 将查询字符串解析

1. 先获取查询字符串

```js
var querystring = window.location.search.slice(1);
```
`location` 为 `window` 提供的全局对象，属性 `search` 指 URL 中问号 `?` 之后的部分（包含 `?`），也就是 `?ie=UTF-8&wd=regexp`，再用 `String.prototype.slice()` 提取其中除 `?` 之外所有内容，即可得到查询字符串。

此时：
```js
console.log(querystring);  // 'ie=UTF-8&wd=regexp'
```

1. 然后对将查询字符串解析成 `json` 格式

### 方法一（常规版）

1. 通过 `split` 方法，指定 `&` 为分隔符，得到处理后的数组 `["ie=UTF-8", "wd=regexp"]` 
1. 遍历数组，同样通过 `split` 方法，指定 `=` 为分隔符，得到 `["ie", "UTF-8"]` 和 `["wd", "regexp"]`
1. 遍历获取的数组中第一项则为键，第二项为对应的值，赋值给 `json`

```js
var querystring = window.location.search.slice(1);
parse(querystring);

function parse (querystring) {
    var querystring = querystring || '';      // 'ie=UTF-8&wd=regexp'
    var queryArray = querystring.split('&');  // ["ie=UTF-8", "wd=regexp"]
    var json = {};
    queryArray.forEach(function (item, index) {
        var tmp = item.split('=');
        // ["ie", "UTF-8"]
        // ["wd", "regexp"]
        json[tmp[0]] = tmp[1];
    })
    return json
}
```

### 方法二（正则版）

先上代码：
```js
var querystring = window.location.search.slice(1);
parse(querystring);

function parse (querystring) {
    var querystring = querystring || '';
    var reg = /([^=&]+)=([^=&]*)/ig;
    var json = {};

    querystring.replace(reg, function (match, $1, $2) {
        json[$1] = $2
    })
    return json;
}
```

1. 利用字符串的 `replace` 方法，如果第一个参数是正则表达式， 并且其为全局匹配模式，同时第二个参数是一个函数，那么每次匹配到的时候，这个函数都会被调用。
1. 正则 `/([^=&]+)=([^=&]*)/ig` 的含义为，使用 `=` 连接，且 `=` 前后的字符串都不能以 `=` 或者 `&` 开头。
  ![](http://p2btijoky.bkt.clouddn.com/18-1-17/36485402.jpg)


**function 参数含义：**

1. 匹配字符串
2. 正则表达式分组内容，没有分组则没有该参数
3. 匹配项在字符串中的 `index`
4. 原字符串

|        | `match`     | `$1` | `$2` | `index` | `origin`             |
|---     | :---:         | :---:      | :---:      | :---:     | :---:                  |
| 第一次 | `ie=UTF-8`  | `ie`     | `UTF-8`  | `0`     | `ie=UTF-8&wd=regexp` |
| 第二次 | `wd=regexp` | `wd`     | `regexp` | `9`     | `ie=UTF-8&wd=regexp` |

### 正则表达式的含义


[String.prototype.split() · MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)

[String.prototype.slice() · MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

[String.prototype.replace() · MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
