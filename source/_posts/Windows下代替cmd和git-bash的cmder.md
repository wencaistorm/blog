---
title: Windows 下代替 cmd 和 git bash 的 cmder
date: 2017-05-27 22:22:53
tags: 
- tools
- 终端
categories: 效率
---

> 1. 环境：windows 系统
> 2. 关键词：命令行工具
 
windows 系统的 cmd 是出了名的难用，这里不再吐槽，此处的重点是 cmder 的安装和使用
 
1. 解压即用，无需安装，并且所有的配置调整都在Cmder目录下进行。

### 右键菜单打开 `cmder`
> 在实际的使用中，我们更多的需求是：在某个文件夹下打开终端。通过简单的设置，`cmder` 就能如你所愿
 
1. 把 `cmder` 存放的目录添加到系统环境变量。添加成功后，`Win + r` 后输入 `cmder` 回车即可打开 `cmder`。
2. 在有管理员权限的终端中输入以下命令即可： `Cmder.exe /REGISTER ALL`
 
### 代替 `git bash`
 
1. `Cmder` 有 mini 版和 full 版，区别在于 full 版有內建 msysgit 工具，即 Git for Windows
2. 如果使用 mini 版，单独安装 Git，将 Git 添加到环境变量后，cmder中同样可以使用 git
 
所以，`cmder` 完全可以替代 `git bash` 做 `git` 相关的操作
 
### 代替 `cmd`
 
1. Windows 自带 cmd 的能做的，`cmder` 都能做到。
2. `cmder` 颜值更高，字体更好看，功能更强大，并且自带多套主题，随意替换。
 
既然这样，还有什么理由不去使用呢？
 
### 连接服务器
 
可以使用下面命令连接 Linux 服务器
 
```
ssh -p 端口号 root@服务器IP
```
 
### 自定义 `aliases`
 
打开 Cmder 目录下的 config 文件夹，里面的 aliases 文件就是配置别名的文件
 
下面是一些实例：
```
gow=cd /d D:/www
gs=git status
sshdev=ssh -p 22root@10.2.5.188
```
 
如果你同时还使用 `AutoHotKey`，那真是再好不过了，为 `cmder` 配置快捷键（如：`Alt + r`）：
```
!r::run, D:\**\Cmder\Cmder.exe
```
 
配合 `aliases` 使用，简直有种天下任我行的快感!
 
### 其他
 
1. 简单的复制粘贴操作，鼠标选中的内容会自动复制到剪切板，点击右键或者 `Ctrl + v` 直接粘贴
2. `Ctrl + 鼠标滑轮` 轻易实现文字放大缩小
3. 修改命令提示符 λ为熟悉的 $
    + full 版： 替换 cmdervendorclink.lua 中的 44 行和46 行的λ 为 $
4. 忽略更新：`Win+Alt+p` 或者鼠标点击 cmder 左上角的图标选择 `settings`，在 `Settings -> Main -> Update` 中，找到 `Do automatic check on` 后面的 `startup` 选项，取消勾选即可。
