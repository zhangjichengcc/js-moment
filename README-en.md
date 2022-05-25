<h1 align="center">js-moment</h1>

<div align="center">

A lightweight moment formatting and timing components.

![](https://img.shields.io/npm/v/js-moment.svg?style=flat)
![](https://img.shields.io/bundlephobia/min/js-moment.svg?style=flat)
</div>

[简体中文](./README.md) | English

## ✨ Features

- Introduce the use of the high-quality lightweight moment component.

## 🖥 Environment Support

* Modern browsers and Internet Explorer 9+ (with polyfills)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE9, IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## 📦 Install
*Currently, o*nly es6 import is supported, which will be gradually improved in the later stage*

```bash
npm install --save-dev js-moment

yarn add js-moment
```
After downloading the project, you can find the js-moment/demo/index.html in node_modules.

## 🔨 Usage

```jsx
import moment from 'js-moment';
moment(t).format('YYYY-MM-DD');
moment(t).format('YYYY-MM-DD hh:mm:ss');
moment(t).format('YYYY年MM月DD日');
moment(t).format('YY-M-D h:m:s');
moment(t).addDay(1);
moment(t).getTime();
```

## 🔗 Links

- [Github](https://github.com/zhangjichengcc/moments)
- [MyBlog](https://zhangjichengcc.github.io/blog)

## 🤝 part

- author zhangjicheng
- Email zhangjichengcc@163.com
