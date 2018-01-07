---
title: 正则表达式
tags:
  - regexp
categories:
  - JavaScript
abbrlink: 2f57a694
date: 2018-01-02 16:27:53
---

## 元字符

元字符既可以是放在 `[]` 中的任意单个字符（如 `[a]` 表示匹配单个小写字符 `a` ）

也可以是字符序列（如 `[a-d]` 表示匹配 `a` 、 `b` 、 `c` 、 `d` 之间的任意一个字符，而 `\w` 表示任意英文字母和数字及下划线）

下面是一些常见的元字符：

| 元字符    | 含义 |
| ---       | --- |
| `.`       | 匹配除 \n 以外的任何字符（注意元字符是小数点）。 |
| `[abcde]` | 匹配 `abcde` 之中的任意一个字符 |
| `[a-h]`   | 匹配 `a` 到 `h` 之间的任意一个字符 |
| `[^fgh]`  | 不与 `fgh` 之中的任意一个字符匹配 |
| `\w`      | 匹配大小写英文字符及数字 `0` 到 `9` 之间的任意一个及下划线，相当于 `[a-zA-Z0-9_]` |
| `\W`      | 不匹配大小写英文字符及数字 `0` 到 `9` 之间的任意一个，相当于 `[^a-zA-Z0-9_]` |
| `\s`      | 匹配任何空白字符，相当于 `[ \f\n\r\t\v]` |
| `\S`      | 匹配任何非空白字符，相当于 `[^\s]` |
| `\d`      | 匹配任何 `0` 到 `9` 之间的单个数字，相当于 `[0-9]` |
| `\D`      | 不匹配任何 `0` 到 `9` 之间的单个数字，相当于 `[^0-9]` |
| `[\u4e00-\u9fa5]` | 匹配任意单个汉字（这里用的是 `Unicode` 编码表示汉字的 ) |

## 正则表达式限定符

上面的元字符都是针对单个字符匹配的，要想同时匹配多个字符的话，还需要借助限定符。

下面是一些常见的限定符 ( 下表中 `n` 和 `m` 都是表示整数，并且 `0 < n < m`) ： 

| 限定符  | 含义                                 |
| ---     | ---                                  |
| `*`     | 匹配 0 到多个元字符，相当于 `{0,}`   |
| `?`     | 匹配 0 到 1 个元字符，相当于 `{0,1}` |
| `+`     | 匹配至少 1 个元字符，相当于 `{1,}`   |
| `{n}`   | 匹配 `n` 个元字符                    |
| `{n,}`  | 匹配至少 `n` 个元字符                |
| `{n,m}` | 匹配 `n` 到 `m` 个元字符             |
| `\b`    | 匹配单词边界                         |
| `^`     | 字符串必须以指定的字符开始           |
| `$`     | 字符串必须以指定的字符结束           |

## 其他
1. 由于在正则表达式中`\`、`?`、`*`、`^`、`$`、`+`、`(`、`)`、`|`、`{`、`[`等字符已经具有一定特殊意义，如果需要用它们的原始意义，则应该对它进行转义，例如希望在字符串中至少有一个“ \ ”，那么正则表达式应该这么写： \\+ 。

2. 可以将多个元字符或者原义文本字符用括号括起来形成一个分组，比如 `^(13)[4-9]\d{8}$` 表示任意以 `13` 开头的移动手机号码。

3. 另外对于中文字符的匹配是采用其对应的 `Unicode` 编码来匹配的，对于单个 `Unicode` 字符，如 `\u4e00` 表示汉字“一”， `\u9fa5`  表示汉字“龥”，在 `Unicode` 编码中这分别是所能表示的汉字的第一个和最后一个的 `Unicode` 编码，在 `Unicode` 编码中能表示 20901 个汉字。

4. 关于 `\b` 的用法，它代表单词的开始或者结尾，以字符串 `123a 345b 456 789d` 作为示例字符串，如果正则表达式是 `\b\d{3}\b`，则仅能匹配 `456` 。

5. 可以使用 `|` 来表示或的关系，例如 `[z|j|q]` 表示匹配 `z` 、 `j` 、 `q` 之中的任意一个字母。

6. 正则验证工具： https://regexper.com/ 

## 正则对象属性

 > 属性均为只读，无法设置其值

| 属性        |  含义                 | 默认值 |
| ---         | ---                  | --- |
| `global`    | 是否全文搜索          | `false` |
| `ignoreCase` | 是否大小写敏感        | `false` |
| `multiline` | 多行搜索              | `false` |
| `lastIndex` | 是当前表达式匹配内容的最后一个字符的下一个位置| 无 |
| `source`    | 正则表达式的文本字符串  | 无 |

  如下：

    ```js
    var reg1 = /\w/;
    var reg2 = /\w/gim;

    console.log(reg1.global);        // false
    console.log(reg1.ignoreCase);    // false
    console.log(reg1.multiline);     // false
    console.log(reg1.source);        // "\w"

    console.log(reg2.global);        // true
    console.log(reg2.ignoreCase);    // true
    console.log(reg2.multiline);     // true
    console.log(reg2.source);        // "\w"
    ```
## 正则对象方法
### `RegExp.prototype.test(str)`

+ 用于测试字符串参数中是否存在匹配正则表达式模式的字符串
+ 如果存在则返回 `true`，否则返回 `false`

    牛刀小试：
    ```js
    var reg = /\w/;

    reg.test('a');    // true
    reg.test('ab');   // true
    reg.test('$');    // true
    ```

    加上 `g` 标志后，结果有了一丝不同~~
    ```js
    var reg = /\w/g;
    reg.test('ab');    // true
    reg.test('ab');    // true
    reg.test('ab');    // false
    reg.test('ab');    // true
    reg.test('ab');    // true
    reg.test('ab');    // true
    reg.test('ab');    // false
    ```

这是因为在匹配的时候并不是每次都是从头开始的，而是每次匹配都会从上次匹配结果的下一个位置开始匹配，也就是 `lastIndex` 属性

+ 第一次匹配到 `a`，
+ 第二次从 `b` 开始，匹配到 `b`
+ 第三次从 `b` 开始，没有匹配结果
+ 因此出现上面的现象

    ```js
    var reg = /\w/g;
    while(reg.test('ab')) {
        console.log(reg.lastIndex);
    }
    // 打印结果为 1，2
    ```

** `test()` 本意测试字符串和正则能否匹配上，而不关心是在哪个位置匹配到，所以就没必要加上 `g` 标志。**


### `RegExp.prototype.exec(str)`

+ 使用正则表达式对字符串进行搜索，并将更新全局 RegExp 对象的属性以反映匹配结果
+ 如果没有匹配的文本则返回 `null`，否则返回一个结果数组，数组有两个属性：
  - index 声明匹配文本地第一个字符的位置
  - input 存放被检索的字符串 `string`
  - 第一个元素是与正则表达式相匹配的文本
  - 第二个元素是与正则表达式的第一个子表达式相匹配的文本（如果有的话）
  - 第三个元素是与正则表达式的第二个子表达式相匹配的文本（如果有的话），以此类推...

#### 非全局调用 `exec()` ，返回数组

    ```js
    var reg = /\d(\w)\d/;
    var str = '1a2b3c4d5e';
    var ret = reg.exec(str);

    console.log(reg.lastIndex);  
    // 0  非全局下，lastIndex 不生效，在此处无意义

    console.log(ret.index);      
    // 0  匹配结果（1a2）的第一个字符在被检索的字符串(1a2b3c4d5e)中的位置

    console.log(ret.input);      
    // 1a2b3c4d5e

    console.log(ret.toString()); 
    // 1a2,a
    ```


#### 全局调用 `exec()` 时，可以通过循环可以把每次匹配到的结果都拿到

```js
var reg = /\d(\w)(\w)\d/g;
var str = '$1az2bb3cy4dd5ee';

while(ret = reg.exec(str)) {
    console.log(reg.lastIndex + '\t' + ret.index + '\t' + ret.toString());
    // 5	1	1az2,a,z
    // 11	7	3cy4,c,y
}
```

+ 第一次匹配到的字符串是 `1az2` ，它在原字符串中的下一个字符的位置为 `5` ，且它第一个字符 `1` 在原字符串的位置为 `1`，其中第一个子表达式 `a`，第二个子表达式 `z`
+ 第二次匹配到的字符串是 `3cy4` ，它在原字符串中的下一个字符的位置为 `11` ，且它第一个字符 `3` 在原字符串的位置为 `7`，其中第一个子表达式 `c`，第二个子表达式 `y`

## 字符串的与正则相关的方法

### 01-String.prototype.replace()

`replace()` 方法的参数可以是一下几种方式：

#### 1. `replace( str, str )`

    ```js
    'a1b'.replace('1', '2');    // "a2b"

    'a1b1c1'.replace('1', '2');    // "a2b1c1"
    ```


#### 2. `replace( str, reg )`

    ```js
    'a1b1c1'.replace(/1/g, '2');    // "a2b2c2"
    ```


#### 3. `replace( str, function )`



##### 示例：字符串中每个数字都加 1
    ```js
    'a1b2c3d4e5'.replace(/\d/g, function ( match, index, origin ) {
        // 正则表达式没有分组内容
        console.log(index);  // 1 3 5 7 9
        return parseInt(match) + 1;
    });
    // "a2b3c4d5e6"
    ```


##### 示例：获取 `url` 中的查询参数
    ```js
    // 1. 准备工作：取得查询字符串
    // 假设当前 URL 为 'http://www.baidu.com?ie=UTF-8&wd=regexp'
    // 可用如下方法获取查询字符串
    // var searchStr = location.search.slice(1);  // 'ie=UTF-8&wd=regexp'

    // 2. 利用正则获取查询参数
    var searchStr = 'ie=UTF-8&wd=regexp';
    var paraObj = {};

    searchStr.replace(/([^=&]+)=([^=&]*)/ig, function ( match, group1, group2, index, origin) {

        console.log(match + '\t' + group1 + '\t' + group2 + '\t' + index + '\t' + origin);
        // ie=UTF-8    ie  UTF-8   0   ie=UTF-8&wd=regexp
        // wd=regexp    wd  regexp  9   ie=UTF-8&wd=regexp
        paraObj[group1] = group2

    })
    console.log(paraObj);
    ```
**function 参数含义：**

1. 匹配字符串
2. 正则表达式分组内容，没有分组则没有该参数
3. 匹配项在字符串中的 `index`
4. 原字符串

|        | `match`     | `group1` | `group2` | `index` | `origin`             |
|---     | :---:         | :---:      | :---:      | :---:     | :---:                  |
| 第一次 | `ie=UTF-8`  | `ie`     | `UTF-8`  | `0`     | `ie=UTF-8&wd=regexp` |
| 第二次 | `wd=regexp` | `wd`     | `regexp` | `9`     | `ie=UTF-8&wd=regexp` |

### `String.prototype.search(reg)`

+ `search()` 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串
+ 方法返回第一个匹配结果 `index` ，差找不到返回 `-1`
+ `search()` 不执行全局匹配，他将会略全局标志 `g` ，并且总是从字符串的开始进行检索

    ```js
    'a1b2c3d4'.search('1');
    'a1b2c3d4'.search(/1/);
    ```

传入的参数不是正则的时候会尝试将其转换为正则

### `String.prototype.match(reg)`

+ `match()` 检索字符串，以找到一个或多个与正则表达式相匹配的文本
+ 正则是否具有全局标志 `g` ，对结果影响很大

### `String.prototype.split(reg)`

    ```js
    'a,b,c,d'.split(',');    // ["a", "b", "c", "d"]

    'a1b2c3d'.split(/\d/);   // ["a", "b", "c", "d"]
    ```
