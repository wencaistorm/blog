---
title: Win下必备神器之Cmder
date: 2017-12-23 13:07:23
tags: 
- tool
categories: 
- tool
---

## 前言

对于使用 **windows 系统**的，需要经常和**命令行**打交道的童鞋，强烈推荐一个工具：Cmder（[Cmder官网](http://cmder.net/): `http://cmder.net/`）

> 因为**好用**，所以**必备**

本该介绍 Cmder 是什么，如何安装，如何使用……，但是已经有前辈对此进行了详细介绍：

+ [Win下必备神器之Cmder](https://jeffjade.com/2016/01/13/2016-01-13-windows-software-cmder/)
+ [介绍好用工具：Cmder ( 具有Linux 温度的Windows 命令提示字元工具 )](https://blog.miniasp.com/post/2015/09/27/Useful-tool-Cmder.aspx)

因此，本篇属于 Cmder 进阶篇，适合已经对 Cmder 有所了解的童鞋阅读，如果不知 Cmder 为何物，推荐先行阅读上面文章

## Cmder 如何好用

### 设置默认启动目录


### 连接服务器
因为 Cmder 支持 ssh 命令，因此可以直接连接服务器，命令为：`ssh 用户名@ip`，例如：
```bash
ssh root@10.2.5.187
```

### 定义 alias
  每次连接服务器都需要输入一长串命令，简直不能忍。好在 Cmder 提供了定义 alias 的功能。配置文件是 `cmder\config\user-aliases.cmd`，打开之后会发现，Cmder 已经默认定义了一些 alias。

  ```bash
  e.=explorer .
  gl=git log --oneline --all --graph --decorate  $*
  ls=ls --show-control-chars -F --color $*
  pwd=cd
  clear=cls
  history=cat "%CMDER_ROOT%\config\.history"
  unalias=alias /d $1
  vi=vim $*
  cmderr=cd /d "%CMDER_ROOT%"
  ```

  先解释默认定义的这些 alias 的作用
  + `e.` : 用资源管理器打开 Cmder 当前所在路径
  + `gl` : 使用 git 进行代码管理的童鞋应该不陌生，`git log` 加上一些参数
  + `ls` : 列出当前目录下的文件和目录
  + `pwd` : 打印当前目录的完整路径名
  + `clear` : 清除屏幕
  + `history` : 显示历史命令
  + `unalias` : 这个，谁知道能告诉我一声么。。。
  + `vi` : 打开 vim 编辑器
  + `cmderr` : 切换到 Cmder.exe 所在的目录下

  一键切换到指定目录
  ```bash
  tofe=cd /d D:/www/front-end/
  ```

  一键连接服务器
  ```bash
  totest=ssh root@10.2.5.187
  todev=ssh root@10.2.5.188
  ```

  更多 alias 的可自由发挥~

### 各种主题

### more


## 最后

> 过一个平凡无趣的人生实在太容易了，你可以不读书，不冒险，不运动，不写作，不外出，不折腾……但是，人生最后悔的事情就是：我本可以。——陈素封。