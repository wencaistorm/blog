---
title: React 点击事件为什么没有被触发？
tags:
  - React
  - JavaScript
categories:
  - React
abbrlink: c48ecca5
date: 2017-11-19 20:20:53
---

点击事件可以说是最常用的事件了，但在 `React` 中有时候事件却没有触发。Why?
<!--more-->

## 问题描述
关键代码如下所示，`Title` 是一个标题组件，我希望在点击此组件时，执行 `handleClick` 方法。

但实际上，点击标题时 `handleClick` 方法并没有被执行。Why?
```jsx
class Container extends Component {
  handleClick() {
    console.log('click on container')
  }

  render() {
    return (
      <div className="container">
        <Title onClick={ this.handleClick.bind(this) }/>
      </div>
    );
  }
}
```

## 原因
`Title` 是 `react` 组件，并不是一个真实的DOM元素，它不存在点击事件，因为它不是最终渲染的页面的元素。

所有的事件处理函数都必须要绑定到真实的 `DOM` 上。传给组件，组件只会认为它是个 `props`。

## 解决办法有两种
1. 如果 `Title` 是自定义组件，可以修改组件内部，监听点击事件，通过 `props` 执行 `handleClick` 方法，代码如下：
```jsx
class Title extends Component {
  render() {
    return (
      <div onClick={ this.props.onClick } className="title">
        <h1>React</h1>
      </div>
    );
  }
}
```

2. 如果 `Title` 是第三方组件，可以在 `Title` 组件外部包裹一层 `DOM` 元素，在 `DOM` 元素上监听点击事件。
```jsx
class Container extends Component {
  handleClick() {
    console.log('click on container')
  }

  render() {
    return (
      <div className="container">
        <div onClick={ this.handleClick.bind(this) }></div><Title/></div>
      </div>
    );
  }
}
```

最后，文档是个好东西，[文档地址](https://reactjs.org/docs/handling-events.html)