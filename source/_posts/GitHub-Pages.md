---
title: What is GitHub Pages
tags:
  - 部署
categories:
  - 部署
abbrlink: 56fd4e32
date: 2018-01-09 18:30:53
---

>Github Pages 是 Github 的静态页面托管服务。它设计的初衷是为了用户能够直接通过 Github 仓库来托管用户个人、组织或是项目的专属页面。参考：[What is GitHub Pages?](https://help.github.com/articles/what-is-github-pages/)

*友情提示：使用此功能需要对 git 及 GitHub 有一定了解*

## GitHub Pages 功能介绍

使用步骤：
1. 注册 GitHub 账户
2. 创建一个仓库
3. 打开此仓库的 `Settings` 页签
![](http://p2btijoky.bkt.clouddn.com/18-1-11/57116092.jpg)
4. 找到 `GitHub Pages` 部分
![](http://p2btijoky.bkt.clouddn.com/18-1-11/59480694.jpg)

因为 GitHub Pages 会展示指定位置（分支）的 `index.html` 或者 `README.md`，因此 `Source` 用于指定分支。

`Source` 字段有 4 个选项：
1. 默认为 `None` ，即不显示
1. `master branch`，本仓库的 `master` 分支
1. `master branch/docs folder`，本仓库的 `master` 分支下的 `docs` 目录
1. `gh-pages branch`，本仓库的 `gh-pages` 分支（需创建后才显示此选项）

也就是说，只要把静态站点放到上面三个位置（分支）之一，然后设置正确的 `Source` 字段，即可使用 GitHub Pages 功能。生成的静态网站地址会友好的显示在 `Source` 字段上方。


## GitHub Pages 使用思路扩展

1. 很多开源项目都会选择将 `master branch/docs` 用于展示项目使用文档
1. 制作个人兴趣静态网站（如：http://wencaizhang.com/demo)
1. 作为个人静态博客站点（如：http://wencaizhang.com/blog)
