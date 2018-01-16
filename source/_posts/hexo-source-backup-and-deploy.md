title: hexo 备份
tags:
  - hexo
categories:
  - Hexo
author: wencaizhang
date: 2018-01-07 23:01:00
---

## 搭建博客的思路
1. 使用框架 `Hexo` [文档](https://hexo.io/zh-cn/docs/) 将 markdown 文章解析成静态网页
1. 借助 `GitHub Pages` 展示静态网页的功能，部署解析出来的静态网页（[What is GitHub Pages](/blog/2018/01/09/GitHub-Pages/)）

## 备份源文件的思路

  *这里写如何备份 markdown 文章源文件，至于详细的搭建步骤请自行百之谷之，不再详述*

  `GitHub Pages` 功能可以展示三个位置的静态网页资源：
  1. `master` 分支
  2. `master` 分支的 `docs` 目录
  3. `gh-pages` 分支

  那么，不妨利用分支功能另外创建一个 `source` 分支用于管理备份配置文件和博客文章源文件，如果对博客主题进行了自定义，甚至可以再创建一个 `theme` 分支用于管理主题。

  如此一来，将所有的文件都纳入版本控制系统，无论在哪里都可以快速创建一个相同的博客写作环境

## 一键部署的思路

如果按照上面的方法做，每次预览或部署静态网页显得略微有点麻烦：
1. 预览：删除旧的解析出来的网页（`hexo clean`），重新解析（`hexo g`），最后启动本地服务器（`hexo s`）
1. 部署静态网页：删除旧的解析出来的网页（`hexo clean`），重新解析（`hexo g`），最后部署到 GitHub 上（`hexo d`）
1. 提交源文件至 `source` 分支
1. 如果修改了主题，还要切换目录并提交主题至 `theme` 分支

有木有很麻烦啊！

但是现在，利用 npm scripts 可以一条命令全部搞定！

做前端开发的同学可能会对此比较熟悉，在网站根目录下有一个 `package.json` 文件，里面有个 `scripts` 字段可用于自定义命令。

如果对 `npm scripts` 不太了解的，推荐：[npm scripts 使用指南 · 阮一峰](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

简单介绍下这段 `npm scripts` ：
1. `scripts` 字段是一个对象。它的每一个属性，对应一段脚本。例如 `dev` 字段对应的脚本是 `hexo clean && hexo g && hexo s`，命令行中使用 `npm run dev` 就可以执行这段脚本
1. `&&`: 表示前一个任务执行成功，后一个任务才执行，`&` 则是两个任务同时执行
1. `npm run dev`: 主要用于本地预览博客，按照顺序执行 `hexo clean`、`hexo g`、`hexo s`，只有前一个任务执行成功，后一个才执行
1. `npm run push`: push 资源文件和静态页面资源
1. `npm run prepush`: 使用 `hexo` 将文章解析成静态页面于 `public` 目录下，然后将 `public` 目录重命名为 `docs`
1. `npm run postpush`: push `theme` 分支
1. 钩子: `npm scripts` 有 `pre` 和 `post` 两个钩子。例如 `push` 脚本的钩子是 `prepush` 和 `postpush`，`prepush` 在 `push` 脚本之前执行，`postpush` 在 `push` 脚本之后执行。也就是说，执行 `npm run push` 的时候，会自动按照顺序先后执行 `npm run prepush && npm run push && npm run postpush` 。

因此，在部署时，只需执行命令 `npm run push`，会自动部署博客网站，提交 `source` 和 `theme` 分支。
  ```bash
  "scripts": {
    "dev": "hexo clean && hexo g && hexo s",
    "prepush": "rm -rf docs && hexo clean && hexo g && mv public docs",
    "push": "git add -A && git commit -m publish && git push origin master",
    "postpush": "cd themes/indigo && git add -A && git commit -m update && git push origin theme"
  }
  ```