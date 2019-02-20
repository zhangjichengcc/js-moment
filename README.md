<h1 align="center">js-moment</h1>

<div align="center">

一套轻量级的 moment 格式化及计算时间的组件。

<!-- ![](https://img.shields.io/badge/version-v0.0.0-green.svg) -->
![](https://img.shields.io/npm/v/js-moment.svg?style=flat)
![](https://img.shields.io/bundlephobia/min/js-moment.svg?style=flat)
</div>

简体中文 | [English](./README-en.md)

## ✨ 特性

- 引入即用的高质量轻量 moment 组件。

## 🖥 支持环境

* 现代浏览器和 IE9 及以上。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE9, IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## 📦 安装

*目前只支持es6的 import 导入，后期会逐步完善*
```bash
npm install --save-dev js-moment

```
项目下载完成后可以在node_modules中找到 js-moment/demo/index.html 查看例子

## 🔨 示例

```js
import moment from 'js-moment';
moment(t).format('YYYY-MM-DD');
moment(t).format('YYYY-MM-DD hh:mm:ss');
moment(t).format('YYYY年MM月DD日');
moment(t).format('YY-M-D h:m:s');
moment(t).addDay(1);
moment(t).getTime();
```

## 🔗 链接

- [项目地址](https://github.com/zhangjichengcc/moments)
- [我的博客首页](https://zhangjichengcc.github.io/blog)

## 🤝 参与共建 [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

- author zhangjicheng
- Email zhangjichengcc@163.com

> 强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)、[《如何向开源项目提交无法解答的问题》](https://zhuanlan.zhihu.com/p/25795393)，更好的问题更容易获得帮助。


