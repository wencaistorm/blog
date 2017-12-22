
## 各分支作用如下：
+ master: 
  主分支，用来部署静态页面网站
+ source: 
  源文件分支，用以保存配置文件，npm 插件信息，和文章源文件。应该同 master 分支同步提交。
+ theme: 
  主题分支，可能会在别人基础上进行样式的改进，以及修改配置文件信息。如果对主题进行修改，应进行提交。


## 使用步骤：

1. clone source 分支

```bash
git clone -b source https://github.com/wencaistorm/wencaistorm.github.io.git blog
```

2. clone theme 分支

```bash
git clone -b theme https://github.com/wencaistorm/wencaistorm.github.io.git ./blog/themes/indigo
```

3. npm install
```bash
cd blog
npm install
```

4. 启动服务预览（自定义脚本）
```bash
npm run dev
```

5. push（自定义脚本）
```bash
npm run push
```