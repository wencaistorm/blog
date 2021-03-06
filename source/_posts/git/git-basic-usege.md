---
title: Git 基本概念
tags:
  - Git
categories:
  - Git
abbrlink: f69de184
date: 2017-12-21 13:08:23
---
# git-basic-usege

## 基本概念

### 4 个区
使用 Git 进行版本管理，不免会遇到几个概念：工作区、暂存区、本地仓库以及远程仓库。

+ 工作目录：很好理解，就是需要对其进行版本管理的文件目录，也就是日常写代码的目录。

+ 远程仓库：如果想要分享你的代码或者与其他开发人员合作，那么就需要将数据放到一台其他开发人员能够连接的服务器上。这台服务器充当代码中转站的角色，这台服务器也有一个和你本地相同的代码库。每当完成一个功能，把最新的代码推送到这个服务器的代码库，别人就通过这台服务器的代码库获取最新的代码。那么这台服务器的代码库就叫做远程仓库。

+ 本地仓库：Git 是分布式版本控制系统，每个人电脑上都有一个完整的代码仓库。相对于远程仓库来说，自己工作用的电脑上面的代码仓库就是本地仓库。为了让远程仓库和本地仓库保持同步，就需要在本地仓库中更新和推送代码。

+ 暂存区：工作的时候，代码进行了修改，文件发生变动，工作结束的时候，把修改的文件提交到版本库中。这时候就需要先把需要提交的文件保存到暂存区，最后把暂存区的文件提交到代码库中。
    1. 希望只提交其中的部分文件
    2. 代码提交应该是一项需要慎重的工作，在提交代码之前

### 工作流程
于是，基本的 Git 工作流程如下：

1. 在工作目录中修改某些文件
1. 把修改的文件保存到暂存区域。
1. 将保存在暂存区域的文件提交到本地仓库
1. 把本地仓库更新到远程仓库

### 文件状态
相应的，在每个步骤中的文件也就处于不同的状态：

1. 未修改的文件的状态为 “未修改”
1. 在工作目录中，已修改的文件状态为 “已修改”
1. 把修改的文件保存到暂存区，此时文件状态由 “已修改” 变为 “已暂存”
1. 将保存在暂存区域的文件提交到本地仓库，此时文件状态由 “已暂存” 变为 “已提交”
1. 把本地仓库更新到远程仓库，此时文件状态由 “已提交” 变为 “已推送”


## 基本使用

假设现在有一个 git 仓库 git-learn，git 地址是：`https://github.com/wencaizhang/git-learn.git`，现在需要在这个仓库中工作。

### 1. 获取代码
  ```bash
  git clone https://github.com/wencaizhang/git-learn.git
  ```
  ![](http://p2btijoky.bkt.clouddn.com/18-1-10/80220578.jpg)

  如图所示，仓库中目前只有一个 README.md 文件。

### 2. 修改 README.md 文件，查看仓库状态

  使用 `git status` 可以查看仓库状态

  ![](http://p2btijoky.bkt.clouddn.com/18-1-10/47205121.jpg)

### 3. 查看修改内容

  提交代码应该是一个严谨的工作，因此提交之前最好能确认本次提交的内容。使用 `git diff <filename>` 可以查看文件的改动情况

  ![](http://p2btijoky.bkt.clouddn.com/18-1-10/16799331.jpg)

  `-` 表示删除，`+` 表示增加，因此，此文件删除了一行，同时增加了一行

### 4. 撤销修改

  此时，如果因为某种原因，希望此文件还原到一开始的状态（即撤销修改的内容），可以使用 `git checkout <filename>` 命令

  ![](http://p2btijoky.bkt.clouddn.com/18-1-10/41078767.jpg)


### 5. 保存到暂存区域

  如果不打算撤销，而是接着往下进行提交工作，那么就可以使用 `git add <filename>` 命令可以把修改的文件保存到暂存区

  ![](http://p2btijoky.bkt.clouddn.com/18-1-10/13486792.jpg)

### 6. 查看暂存区内容

  在整个工作流程中，是随时都可查看修改内容的，当文件保存到暂存区之后，可以使用 `git diff --staged <filename>` 命令查看（和修改区查看相比，多一个参数 `--staged`）

  ![](http://p2btijoky.bkt.clouddn.com/18-1-10/89132551.jpg)

### 7. 撤销暂存

  不巧的是，在上一步查看修改内容之后，发现之前的修改有所不妥，不想继续往下提交了，希望将此文件还原到一开始的状态（即撤销修改的内容）。

  这时候可以使用 `git reset <filename>` 命令将其从暂存区撤回，然后再使用 `git checkout <filename>` 命令撤销其内容修改

  ![](http://p2btijoky.bkt.clouddn.com/18-1-10/36744410.jpg)

  ![](http://p2btijoky.bkt.clouddn.com/18-1-10/80992114.jpg)

### 8. 提交到本地仓库

  如果查看了暂存区的文件确认无误，就可以把文件提交到本地仓库了。此时会将暂存区的所有文件全部提交，命令是：`git commit -m "提交的描述信息"`

  ![](http://p2btijoky.bkt.clouddn.com/18-1-10/84984444.jpg)

  wait a moment，这里提示设置邮箱和用户名（如果安装 git 之后没有设置邮箱和用户名才会有这个提示）

  按照提示进行设置邮箱和用户民，然后进行提交：`git commit -m "add a line"`

  ![](http://p2btijoky.bkt.clouddn.com/18-1-10/8464693.jpg)

### 9. 提交到本地仓库后查看提交记录

  通过命令 `git log` ，可以查看每次提交时，提交人的信息，提交时间，提交的描述信息和提交版本号

  ![](http://p2btijoky.bkt.clouddn.com/18-1-10/36251546.jpg)
