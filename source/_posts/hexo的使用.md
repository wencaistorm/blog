---
title: hexo 的使用
date: 2017-05-27 22:22:53
tags: 
- hexo
categories: hexo
---

hexo 是新兴的，基于 node 的个人博客框架，促进更多的人自行搭建博客。

<!--more-->

## 新建一篇文章

在项目根目录下打开命令行，执行如下命令：

> hexo new "new article"

则会在 `source/_posts` 目录中创建名为 `new-article.md` 的文件。

打开文件，可以看到：

```yaml
---
title: new-article
date: 2017-05-27 22:22:53
tags: 
---
```

开头是文件的属性，可以手动修改，如下

```yaml
---
title: title  #文章标题
date: 2017-05-27 22:22:53  #文章生成时间
tags: # 文章标签
    - 标签一
    - 标签二
categories: hexo # 文章分类目录
---
```

快速实现代码压缩

使用 hexo 插件 [Hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier) ，就不需要另外安装 gulp 等自动化工具即可对代码进行压缩

使用该插件需要在站点目录配置文件中加上如下代码

```yaml
html_minifier:
  enable: true
  ignore_error: false
  exclude:
css_minifier:
  enable: true
  exclude:
    - '*.min.css'
js_minifier:
  enable: true
  mangle: true
  output:
  compress:
  exclude:
    - '*.min.js'
image_minifier:
  enable: true
  interlaced: false
  multipass: false
  optimizationLevel: 2
  pngquant: false
  progressive: false
```
