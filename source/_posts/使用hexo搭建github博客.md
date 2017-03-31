---
title: 使用hexo搭建github博客
date: 2016-06-15 23:25:15
tags: hexo
categories: hexo搭建博客
---

## 准备工作
1. [nodejs下载安装](https://nodejs.org/en/)
2. [github账号](https://github.com)
3. [git下载安装](https://git-scm.com/download)

<!-- more -->

## 创建本地博客

### 安装hexo
 windows下，打开cmd，执行命令：`npm install -g hexo` 。

### hexo初始化
进行初始化：首先创建一个文件夹，这是你存放配置文件以及文章的地方，例如我是在D盘下创建的hexo_blog文件夹，而且，**以后所有的命令都是在这个目录下进行的**。打开cmd进入创建的文件夹目录（可以按住shift，然后右键选择在此处打开命令窗口），执行命令 ` hexo init`，这个操作会在这个目录下创建一些配置文件。初始化成功会提示 ` INFO  Start blogging with Hexo!`。

### 创建文章

在cmd中输入`hexo n "name"`，就会在source文件夹下的posts文件夹中创建一个name.md文件，我们就可以愉快的使用markdown语法书写博客了。

### 创建静态页面进行预览

执行命令，创建静态页面
> `hexo g` 

执行命令，启动本地服务器 
> `hexo s`
 
此时在浏览器中输入地址`localhost:4000` ，回车会看到一个默认的博客页面。


## 配置github
### 注册GitHub账号

这个操作应该每个人都会就不多说了

### 创建仓库repository

在github创建一个与用户名对应的仓库，假设用户名为`username`，那么仓库的名字必须为`username.github.io`。

### 建立关联

hexo初始化的时候创建了一个配置文件`_config.yml`，打开配置文件，在末尾将信息补全如下：

```
deploy:
  type: git
  repo: https://github.com/username/username.github.io.git
  branch: master
```
（注意冒号后面空一格，使用的是https协议，而不是http协议）

### 安装部署插件

打开cmd，执行命令`npm install hexo-deployer-git --save`。

### 部署到GitHub

执行命令
> hexo g
> hexo d

在部署的过程中，会弹出窗口，把你的GitHub账号和email账号输入即可。

部署成功之后，等待几分钟，打开username.github.io，就可以看到你的博客了。

enjoy！