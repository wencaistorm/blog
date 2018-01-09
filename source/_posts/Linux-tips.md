---
title: Linux Tips
tags:
  - Linux
categories: Linux
abbrlink: 2f176420
date: 2017-11-26 21:20:53
---

### 修改普通用户对目录的读写权限
普通用户是没有文件的读写权限的，需要每次都临时获取 root 权限，但这样比较麻烦。
方便的做法是，修改/var/www目录的读写权限（777是linux中的最高权限，表示可读，可写，可执行）
```bash
sudo chmod 777 /var/www
```

### 设置别名 `alias`
编辑配置文件 `vim /etc/profile`，在文件中添加配置代码，例如：
```bash
alias tofe="cd /var/www/rmp/spms/front-end/"
alias gs="git status"
```

### 设置环境变量
