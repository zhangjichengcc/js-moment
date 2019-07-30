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

## 参数及使用说明


>#### 方法
|方法名|参数类型|默认值|方法说明|
|---|---|---|---|
|format| String| 'YYYY-MM-DD HH:MM:SS' | 格式化时间|
|addTime| Int, String| 0, 'h' | 时间加减，默认为小时（h）, 相应的，分钟（m）, 秒（s）|
|addDay| Int| 0 | 天数加减|
|addWeek| Int| 0| 星期加减|
|addMonth| Int|0| 月份加减|
|addYear| Int| 0| 年份加减|
|getTime| null| ‘’| 获取时间戳|

>#### 属性
|属性名|说明|
|--|--|
|date|标准 Date对象|
|dateObject| 包含年(year), 月(month), 日(day), 时(hours), 分(minutes), 秒(seconds)的对象集合,**注意：month 的值为（0 - 11）*|

> **2.0版本以后支持方法的链式使用，如: `moment(t).addDay(1).addMonth(1).format()`**   
> 2.0版本之前只支持方法的嵌套使用，如： `moment(moment(t).addDay(1)).format()`

> moment() 会返回一个 Moment 实例对象, 包含上述等方法及属性，

> 修复ios设备格式化时间显示 NAN 的bug

## 🔨 示例

```js
import moment from 'js-moment';
moment(t).format('YYYY-MM-DD');
moment(t).format('YYYY-MM-DD hh:mm:ss');
moment(t).format('YYYY年MM月DD日');
moment(t).format('YY-M-D h:m:s');
moment(t).addDay(1).format();
moment(t).addDay(1).addWeek(1).addMonth(1).addYear(1).format();
moment(t).addTime(1);
moment(t).addTime(1, 'h').addTime(1, 'm').addTime(1, 's');
moment(t).getTime();
```

## 🔗 链接

- [项目地址](https://github.com/zhangjichengcc/moments)
- [我的博客首页](https://zhangjichengcc.github.io/blog)

## 🤝 参与共建 [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

- author zhangjicheng
- Email zhangjichengcc@163.com

> 强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)、[《如何向开源项目提交无法解答的问题》](https://zhuanlan.zhihu.com/p/25795393)，更好的问题更容易获得帮助。


