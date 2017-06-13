---
title: Page Visibility API
date: 2017-06-07 22:22:53
tags: 
- js
categories: js
---

1. `document.hidden`: 布尔类型，表示页面是否隐藏（包括页面在后台标签中或者浏览器最小化）

2. `document.visibilityState`
    + 页面在后台标签页中或者浏览器最小化
    + 页面在前台标签页中
    + 实际的页面已经隐藏，但用户可以看到页面的预览
    + 页面在屏幕外执行预渲染处理

3. `visibilitychange` 事件s：当文档从可见变为不可见或从不可见变为可见时，触发该事件。

4. 没有了