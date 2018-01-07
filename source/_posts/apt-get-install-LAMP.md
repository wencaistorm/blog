---
title: Ubuntu 安装 LAMP 环境
tags:
  - 部署环境
  - Linux
abbrlink: 5ba4e681
date: 2017-11-27 21:22:53
categories:
---
[toc]

安装开发环境亦或部署环境，向来不是一件容易的事情。
<!--more-->
### 写在前面
1. 安装顺序，一定是先安装 Apache，后安装 php，因为 php 安装完成之后，会自动修改 Apache 的配置文件
2. 关于 Apache 配置文件，有的地方叫 `httpd.conf` ，其实就是 `apache2.conf`

### mysql 安装
+ 安装命令：
```bash
apt-get install mysql-server
apt-get install mysql-client 
apt-get install libmysqlclient-dev
```
+ 安装过程中，会提示为 root 用户设置密码
+ 安装完成之后：
  - 连接 mysql：`mysql -u roo t -p`
  - 退出 mysql：`exit`

### apache 安装
+ 安装命令
```bash
apt-get install apache2
```
+ 安装完成之后，apache2 的默认主目录：`/var/www/`
apache2 的操作命令（启动 Apache 之后，可以在浏览器中打开 `localhost` 地址查看 Apache 的默认页面）：
  - 启动：`/etc/init.d/apache2 start`
  - 重启：`/etc/init.d/apache2 restart`
  - 关闭：`/etc/init.d/apache2 stop`



### php 安装
+ 安装命令
```bash
apt-get install php
```
+ 安装完成之后
查看版本信息：`php -v`

