---
title: Gulp 调试小技巧
tags:
  - Gulp
categories:
  - Gulp
abbrlink: aa3b2445
date: 2017-11-28 21:30:53
---

编写 gulp 任务时，经常会遇到错误的情况，导致任务执行过程被中断，可以通过事件监听的方式打印错误，并让任务继续往下执行。

<!--more-->

## 基础版

主要的思路是通过事件监听把错误打印出来，然后定位错误。

这是部分代码： 
```js
.pipe(uglify().on('error', function (e) {
    console.log(e)
}))
```

## 升级版

其实就是稍微简单封装一下。

```js
function createErrorHandler(name) {
    return function (err) {
        console.error('Error from ' + name + ' in compress task', err.toString());
    };
}

gulp.task('minify_js', function () {
    var uglify = require('gulp-uglify');
    return gulp.src('./build/**/*.js')
        .pipe(uglify().on('error', createErrorHandler('uglify')))
        .pipe(gulp.dest('build'))
        .pipe($.size({ title: 'minify_js' }));
})
```

