<h1 align="center">js-moment</h1>

<div align="center">

超轻量级的 moment 格式化及计算时间的组件。

![](https://img.shields.io/npm/v/js-moment.svg?style=flat)
![](https://img.shields.io/bundlephobia/min/js-moment.svg?style=flat)
</div>

简体中文 | [English](./README-en.md)

## ✨ 特性

- 引入即用的高质量轻量 moment 组件。

## 🖥 支持环境

* 现代浏览器和 IE9 及以上。

| [IE / Edge](http://godban.github.io/browsers-support-badges/) | [Firefox](http://godban.github.io/browsers-support-badges/) | [Chrome](http://godban.github.io/browsers-support-badges/) | [Safari](http://godban.github.io/browsers-support-badges/) | [Opera](http://godban.github.io/browsers-support-badges/) | [Electron](http://godban.github.io/browsers-support-badges/) |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE9, IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## 📦 安装

```bash
>  npm install --save js-moment
```

``` js
  import moment form 'js-moment';
```
             
----------------------------------------
           
## 参数及使用说明

#### **moment() 会返回一个 Moment 实例对象, 包含以下方法及属性**；

### 属性
 
|属性名|说明|
|--|--|
|date|标准 Date对象|
|dateObject| 包含年(year), 月(month), 日(day), 时(hours), 分(minutes), 秒(seconds)的对象集合,**注意：month 的值为（0 - 11）**|

### 方法

|方法名|参数类型|默认值|版本|方法说明|
|---|---|---|---|---|
|format| String| 'YYYY-MM-DD HH:MM:SS' |v1.0.0| 格式化时间|
|addTime| Int, String| 0, 'h' |v1.0.0| 时间加减，默认为小时（h）, 相应的，分钟（m）, 秒（s）|
|addDay| Int| 0 |v1.0.0| 天数加减|
|addWeek| Int| 0|v1.0.0| 星期加减|
|addMonth| Int|0|v1.0.0| 月份加减|
|addYear| Int| 0|v1.0.0| 年份加减|
|getTime| null| ‘’|v1.0.0| 获取时间戳|
|fromTo| String \ Date| new Date()[当前时间]|v2.1.0| 获得相对时间|

#### `format` 字符含义

|含义|字符|格式|版本|
|:-:|:-:|:-:|-|
|年|YYYY / yyyy|0000 - 9999|v1.0.0|
| - |YY / yy|00 - 99|v1.0.0|
|月|MM|00 - 12|v1.0.0|
|-|M|0 - 12|v1.0.0|
|日|DD|00 - 31|v1.0.0|
| - |D|0 - 31|v1.0.0|
|时 (24h制)|HH|00 - 24|v1.0.0|
|-|H|0 - 24|v1.0.0|
|时 (12h制)|hh|00 - 12|v1.0.0|
|-|h|0 - 12|v1.0.0|
|分|mm|00 - 60|v1.0.0|
|-|m|0 - 60|v1.0.0|
|秒|ss|00 - 60|v1.0.0|
|-|s|0 - 60|v1.0.0|
|子午线|AA|上午 / 下午|v2.2.0|
|-|A|AM / PM|v2.2.0|
|-|a|am / pm|v2.2.0|
|星期|W|日、一、二、三、四、五、六|v2.2.0|
|-|w|0 - 6|v2.2.0|
|季度|Q|一、二、三、四|v2.2.0|
|-|q|1 - 4|v2.2.0|


#### `fromTo` 相对时间  > `moment().fromTo()`

属性

|属性名|说明|
|-|-|
|tag|标记时间的前后，'-'表示之前；'+'表示之后|
|years| 相差的年月日时分秒中的年数|
|months| 同上，相差月数|
|days| 同上，相差天数|
|hours| 同上，相差小时数|
|minutes| 同上，相差分钟数|
|seconds| 同上，相差秒数|
|o| 总计相差的时间，包含年月日时分秒的集合|

方法

|方法名|参数类型|默认值|版本|方法说明|
|-|-|-|-|-|
|format|String|Null|v2.1.0|格式化相对日期|
          
### 重要更新

**# v2.0**

**2.0版本以后支持方法的链式使用，如: `moment(t).addDay(1).addMonth(1).format()`**   
2.0版本之前只支持方法的嵌套使用，如： `moment(moment(t).addDay(1)).format()`      
修复ios设备格式化时间显示 NAN 的bug

**v2.1.0**

增加`fromTo`方法，用于获取**相对时间**， 详情见参数说明↑；

**v2.2.0**

增加 `format` 格式化方法的季度、星期等格式，详情见参数说明；

**v2.2.1**

切换到webpack5.0进行代码编译，切换ts进行开发
     
## 🔨 示例


<h2 style="text-align: center;">引入</h2>

```js
  import moment from 'js-moment';
```
<h2 style="text-align: center;">日期格式化</h2>

```js
  const t = '2019-10-31 12:00:01';

  moment(t).format('YYYY-MM-DD');          // 2019-10-31
  moment(t).format('YYYY-MM-DD hh:mm:ss'); // 2019-10-31 12:00:01
  moment(t).format('YYYY年MM月DD日');      // 2019年10月31日
  moment(t).format('YY-M-D h:m:s');       // 19-10-31 12:0:1
  moment(t).format('YYYY-MM-DD 星期W AA h:m:s') // 2019-10-31 星期四 下午 12:0:1

```
       
<h2 style="text-align: center;">日期计算</h2>
              
```js
  const t = '2019-10-31 12:00:01';

  moment(t).addYear(1);               // Moment {date: Sat Oct 31 2020 12:00:01 GMT+0800 (中国标准时间), dateObject: {…}}
  moment(t).addYear(1).format();      // 2020-10-31 12:00:01
  moment(t).addMonth(1).format();     // 2019-12-01 12:00:01
  moment(t).addDay(1).format();       // 2019-11-01 12:00:01
  moment(t).addTime(1).format();      // 2019-10-31 13:00:01
  moment(t).addTime(1, 'h').format(); // 2019-10-31 13:00:01
  moment(t).addTime(1, 'm').format(); // 2019-10-31 12:01:01
  moment(t).addTime(1, 's').format(); // 2019-10-31 12:00:02
```

<h2 style="text-align: center;">相对时间</h2>

```js
  const t = '2019-10-31 12:00:01';

  moment(t).fromTo();                               // {o: {…}, tag: "+", years: 0, months: 0, days: 0, …}
  moment(t).fromTo('2018-09-01 08:30:00').format(); // 1年2个月前
  moment(t).fromTo('2019-08-01 08:30:00').format(); // 3个月1天前
  moment(t).fromTo('2019-10-31 13:01:25').format(); // 1小时一分钟后
  moment(t).fromTo('2019-10-31 12:01:25').format(); // 1分钟24秒后

  // 自定义格式
  moment(t).fromTo('2018-09-01 08:30:00').format('Y年M个月D天h小时m分钟s秒'); // 1年2个月5天3小时30分钟1秒
  moment(t).fromTo('2018-09-01 08:30:00').format('Y年M个月D天');   // 1年2个月5天
  moment(t).fromTo('2018-09-01 08:30:00').format('M个月D天h小时'); // 14个月5天3小时
  moment(t).fromTo('2018-09-01 08:30:00').format('h小时m分钟s秒'); // 10203小时30分钟
  // 通过属性自行构造显示格式 **不推荐使用，若有必要，请仔细阅读使用方法**

  const { tag, total, times } = moment(t).fromTo('2018-09-01 08:30:00');
  // 注意！ `total`和`times`都包含 years,month... 等属性，但 `total` 包含的是已经进制后的时间，而times包含的则是未进制的时间属性，如 1天12个小时, total.hours: 12; times.hours: 36
  `发布于${times.months}个月${total.days}天${tag === '-' ? '之前' : '以后'}` // 发布于14个月5天之前
  `距离高考还有：${times.days}天${total.hours}小时${total.minutes}分钟${total.seconds}秒` // 距离高考还有：425天 3小时 30分钟 1秒 
  `闹钟将于${times.hours}小时${total.minutes}分钟${total.seconds}秒后响起` // 闹钟将于3小时30分钟30秒后响起
```
#### 注意：为方便使用，极大的提高方法的灵活性，本方法将所有时间参数均暴露出来，分别存于`total`和`times`两个内部对象当中，用于开发者自己组装满足自己需求的时间格式， 需要注意的是， `total`和`times`对象内的变量含义不同！`total`中的时间参数均为进制后的，而`times`中的则未进制，举个栗子：
**1年 2个月 5天 3小时 30分钟 1秒** 对应的属性值如下表：
|_|.years|.months|.days|.hours|.minutes|.seconds|
|-|-|-|-|-|-|-|
|times|1|14|425|10203|612210|36732601|
|total|1|2|5|3|30|1|

所以当我们想要自己拼接时间格式的时候，最大的单位值要取times中的对象，其他则取total中的，如上面的栗子  
|_|_|_|_|_|_|
|-|-|-|-|-|-|
|1年|2个月|5天|3小时|30分钟|1秒|
||14个月|5天|3小时|30分钟|1秒|
|||425天|3小时|30分钟|1秒|
||||10203小时|30分钟|1秒|
|||||612210分钟|1秒|
||||||36732601秒|
         

## 🔗 链接

- [项目地址](https://github.com/zhangjichengcc/moments)
- [我的博客首页](https://zhangjichengcc.github.io/blog)

## 🤝 参与共建 
莫得参与，莫得共建，莫得赞助
- author zhangjicheng
- Email zhangjichengcc@163.com

> 

ts-node-esm ./src/index.ts
