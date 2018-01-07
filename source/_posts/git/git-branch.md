---
title: Git 分支
tags:
  - Git
categories:
  - Git
abbrlink: 798d2056
date: 2018-01-06 15:43:23
---

### 前言
  

### 查看分支
1. `git branch` 查看本地分支
```bash
$ git branch
* master
```
  + 美元符号 `$` 是命令提示符，即后面语句为执行的命令
  + 星号 `*` 表示当前分支为 `master`

1. `git branch -r` 查看远程分支
```bash
$ git branch -r
  origin/HEAD -> origin/master
  origin/master
```
  + `origin` 是默认的远程仓库的名字，`origin/master` 表示远程仓库的 `master` 分支
  + `origin/HEAD` 就像一个指针，表示默认分支，此处指向 `origin/master`，即 `origin/master` 是默认分支。

1. `git branch -a` 查看所有分支，包含本地分支和远程分支
```
$ git branch -a
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
```
  + 当前分支为 `master`
  + `remotes` 表示远程主机，远程主机可能不止一个，因此要指定远程主机的名字，`origin` 为远程主机的名字

### 创建分支
1. `git branch <分支名字>` 用于创建分支，默认以 `HEAD`（通常是 `master` 分支）作为起点来创建分支
```bash
$ git branch dev

$ git branch
  dev
* master
```
  + `git branch` 命令仅仅建立了一个新分支，但不会自动切换到这个分支中去，因此当前分支仍是 `master`

### 切换分支
1. `git checkout <分支名字>` 用于切换分支
```bash
$ git checkout dev
Switched to branch 'dev'

$ git branch
* dev
  master
```
  + 切换分支之后，会有提示信息：`Switched to branch 'dev'`
  + 通过 `git branch` 命令查看，当前分支已经切换到 `dev`

### 创建并自动切换到新分支
1. `git checkout -b <分支名字>` 通过增加 `-b` 参数会创建分支并且切换到此分支：
```bash
$ git checkout -b feature
Switched to a new branch 'feature'

$ git branch
  dev
* feature
  master
```
  + 切换分支之后，会有提示信息：`Switched to a new branch 'feature''`
  + 通过 `git branch` 命令查看，当前分支已经切换到 `feature`

### 将本地分支推送到远程
1. `git push <远程主机名> <本地分支名>:<远程分支名>` 
```bash
$ git push origin feature:feature
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/wencaistorm/git-learn.git
 * [new branch]      feature -> feature
```
  + 提示信息：`* [new branch]      feature -> feature` ，说明 push 成功！
  + 通过 `git branch -a` 命令验证，发现远程分支 `origin/feature` 已经被创建成功
```bash
$ git branch -a
  dev
* feature
  master
  remotes/origin/HEAD -> origin/master
  remotes/origin/feature
  remotes/origin/master
```


1. `git push <远程主机名> <本地分支名>` 如果忽略远程分支名，则表示将本地分支推送到与本地分支存在追踪关系的远程分支，如果该远程分支不存在，则会被新建。
```bash
$ git push origin dev
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/wencaistorm/git-learn.git
 * [new branch]      dev -> dev
```
  + 同样的提示：`* [new branch]      dev -> dev`
  + 同样再来次验证，发现远程分支 `origin/dev` 已经被创建成功！
```bash
$ git branch -a
* dev
  feature
  master
  remotes/origin/HEAD -> origin/master
  remotes/origin/dev
  remotes/origin/feature
  remotes/origin/master
```

### 合并分支
1. `git merge <分支名字>` 用于合并分支（将指定分支合并到当前分支）
  例如在 `dev` 分支创建了一个 `test.md` 文件，就可以使用此命令把 `dev` 合并到 `master` 上（需提前切换到 `master` 分支）
```bash
$ git merge dev
Updating 75dd5ff..f21cc70
Fast-forward
 test.md | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 test.md
```

  最后别忘了，提交 `master` 分支
```bash
$ git push origin master
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/wencaistorm/git-learn.git
   75dd5ff..f21cc70  master -> master
```

### 删除本地分支

1. `git branch -d <本地分支名>` 删除本地分支，但只能删除已经被 merge 的分支。
```bash
$ git branch -d dev
error: The branch 'dev' is not fully merged.
If you are sure you want to delete it, run 'git branch -D dev'.
```
  + 删除失败，git 提示：`dev` 分支没有被合并，如果要强行删除，需要使用命令 `git branch -D dev`
  + 需要注意的是，这里的合并，并不一定是合并到 `master` 分支，合并到任何分支都可以

1. `git branch -D <本地分支名>` 强行删除本地分支，即使此分支没有被 merge
```bash
$ git branch -D dev
Deleted branch dev (was 4a332d3).
```
  + 删除成功！

### 删除远程分支

1. `git push origin :<远程分支名>` 将一个空分支推送到远程分支，也就意味着将删除这个远程分支
```bash
$ git push origin :dev
To https://github.com/wencaistorm/git-learn.git
 - [deleted]         dev
```
  + 删除成功，并且给出提示信息：` - [deleted]         dev`
  + 通过 `git branch -a` 命令验证，发现远程分支 `origin/dev` 已经被删除
```bash
$ git branch -a
* dev
  feature
  master
  remotes/origin/HEAD -> origin/master
  remotes/origin/feature
  remotes/origin/master
```

2. `git push origin --delete <远程分支名>` 通过 `--delete` 或者 `-d` 参数删除远程分支
```bash
$ git push origin --delete feature
To https://github.com/wencaistorm/git-learn.git
 - [deleted]         feature
```
  + 删除成功，同样给出提示信息：` - [deleted]         feature`
  + 通过 `git branch -a` 命令验证，发现远程分支 `origin/feature` 已经被删除
```bash
$ git branch -a
* dev
  feature
  master
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
```
### 重命名分支
  分支情况如下：
```bash
$ git branch
  master
* new
```
  现在想把 `new` 分支重命名为 `newer` 分支，可以通过 `git branch -m <重命名前分支名称> <重命名后分支名称>`
```bash
$ git branch -m new newer
```
修改成功，重新查看分支
```bash
$ git branch
  master
* newer
```

### 总结
最后总结一下，因为 `<远程主机名>` 通常默认为 `origin` ，因此这里直接以 `origin` 表示 `<远程主机名>`：
+ 查看分支
  - `git branch` 查看本地分支
  - `git branch -r` 查看远程分支
  - `git branch -a` 查看所有分支
+ 创建和切换分支
  - `git branch <分支名字>` 创建分支
  - `git checkout <分支名字>` 切换分支
  - `git checkout -b <分支名字>` 创建并自动切换到新分支
+ 把本地分支推送到远程
  - `git push origin <本地分支名>:<远程分支名>` （冒号两侧没有空格）
  - `git push origin <本地分支名>`
+ 合并分支 `git merge <分支名字>`
+ 删除本地分支（注意`-d` 和 `-D` 的区别）
  - `git branch -d <本地分支名>` 删除本地分支，但只能删除已经被 merge 的分支。
  - `git branch -D <本地分支名>` 强行删除本地分支，即使此分支没有被 merge
+ 删除远程分支
  - `git push origin :<远程分支名>` （冒号左侧有两个空格）
  - `git push origin --delete <远程分支名>` 或 `git push origin -D <远程分支名>` （`--delete` 和 `-D` 作用相同）
+ 重命名分支 `git branch -m <重命名前分支名称> <重命名后分支名称>`