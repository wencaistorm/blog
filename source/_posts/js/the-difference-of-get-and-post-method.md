---
title: GET 和 POST 的区别
tags:
  - JavaScript
categories:
  - JavaScript
abbrlink: d4ca5e4c
date: 2017-11-25 23:31:23
---

## 从表象上看：

1. `GET` 参数通过 URL 传递，`POST` 放在 `Request body` 中。
2. `GET` 产生的 URL 地址可以被记录到浏览器历史中，而 `POST` 不可以。
3. `GET` 比 `POST` 更不安全，因为参数直接暴露在 `URL` 上，所以不能用来传递敏感信息。
4. `GET` 请求在URL中传送的参数是有长度限制的，而 `POST` 没有。

## 底层来看：

**无区别**

解释如下：
1. 给 `GET` 加上 `request body`，给 `POST` 带上 url 参数，技术上是完全行的通的
2. 为了给不同的区别不同类型的请求，才定义了 `GET`、`POST`、`PUT`、`DELETE`，依次对应 查、改、增、删
3. 业界不成文的规定是，（大多数）浏览器通常都会限制 url 长度在 2K 个字节，而（大多数）服务器最多处理 64K 大小的 url。超过的部分，恕不处理。