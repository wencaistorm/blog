abbrlink: '0'
title: hexo 备份
tags:
  - hexo
categories:
  - Hexo
author: wencaizhang
date: 2018-01-07 23:01:00
---
## 关于备份源文件我是这么做的

  在搭建博客的时候，通常都会在 GitHub 上面创建一个 git 仓库，利用 GitHub 提供的 gh-pages 功能，将 hexo 生成的静态网页提交到 master 分支。那么顺着这个思路，利用 git 的分支功能将这个仓库变成集展示和备份于一体的 git 仓库。

  例如，创建 source 分支用于管理配置文件和博客文章源文件，如果对博客主题进行了自定义，还可以再创建一个 theme 分支用于管理主题。

  这样做的好处，一方面是备份，另一个方面是方便在不同的电脑上快速搭建环境，只需要 `git clone` 和 `npm install` 两个命令就可以搞定！

## 一键部署

如果按照上面的方法做，每次写完文章最后都会用这么几个步骤：
1. `hexo` 的部署命令 `hexo d`
1. 提交 `source` 分支源文件
1. 如果修改了主题，还要切换目录并提交 `theme` 分支

利用 npm scripts 可以一条命令全部搞定！

做前端开发的同学可能会对此比较熟悉，在网站根目录下有一个 `package.json` 文件，里面有个 `scripts` 字段，这里面可以自定义命令。

如果对 `npm scripts` 不太了解的，推荐：[npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

简单介绍下这段 `npm scripts` ：
1. `scripts` 字段是一个对象。它的每一个属性，对应一段脚本。例如 `dev` 字段对应的脚本是 `hexo clean && hexo g && hexo s`，命令行中使用 `npm run dev` 就可以执行这段脚本
1. `&&`: 表示前一个任务执行成功，后一个任务才执行，`&` 则是两个任务同时执行
1. `npm run dev`: 主要用于本地预览博客，按照顺序执行 `hexo clean`、`hexo g`、`hexo s`，只有前一个任务执行成功，后一个才执行
1. `npm run push`: 部署博客
1. `npm run prepush`: 提交 `source` 分支
1. `npm run postpush`: 提交 `theme` 分支
1. 钩子: `npm scripts` 有 `pre` 和 `post` 两个钩子。例如 `push` 脚本的钩子是 `prepush` 和 `postpush`，`prepush` 在 `push` 脚本之前执行，`postpush` 在 `push` 脚本之后执行。也就是说，执行 `npm run push` 的时候，会自动按照顺序先后执行 `npm run prepush && npm run push && npm run postpush` 。

因此，在部署时，只需执行命令 `npm run push`，会自动部署博客网站，提交 `source` 和 `theme` 分支。
  ```bash
  "scripts": {
    "dev": "hexo clean && hexo g && hexo s",
    "prepush": "git add -A && git commit -m update && git push origin source",
    "push": "hexo clean && hexo g && hexo d",
    "postpush": "cd themes/indigo && git add -A && git commit -m update && git push origin theme"
  }
  ```