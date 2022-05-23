<h1 align="center">js-moment</h1>

<div align="center">

超轻量级的 moment 格式化及计算时间的组件。

![](https://img.shields.io/npm/v/js-moment.svg?style=flat)
![](https://img.shields.io/bundlephobia/min/js-moment.svg?style=flat)
</div>

<!-- 简体中文 | [English](./README-en.md) -->

## ✨ 特性

- 引入即用的高质量轻量 moment 组件。
- 剔除 moment.js、day.js等日期组件的冗余方法，注重常用方法及**开放性**，暴露更多接口来支持各种场景
- 更小更高效

## 🖥 支持环境

- 现代浏览器和 IE9 及以上。

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

---

## 参数及使用说明

> `moment()` 会返回一个 `Moment` 实例对象, 包含以下方法及属性;

### `Moment`属性

|属性名|说明|
|-|-|
|`date`|标准 `Date` 对象|
|`dateObject`| `year`： 年 </br> `month`：月 0-11</br> `day`：日</br>`hours`：时 0-23)</br> `minutes`：分</br> `seconds`：秒</br> `time`：时间戳 </br> `week`：星期 0-6 </br> `quarter`: 季度 0-3 |

**`Moment.dateObject`**

- year: number 年
- month: number 月 0-11
- day: number 日 1-31
- hours: number 时 0-23
- minutes: number 分 0-60
- seconds: number 秒 0-60
- time: number 时间戳
- week: number 星期 0-6
- quarter: number 季度 0-3

---

### `Moment`方法

|方法名|参数类型|必填|默认值|方法说明|版本|
|-|-|-|-|-|-|
|`format(str)`|`string`|N|`'YYYY-MM-DD hh:mm:ss'`|格式化时间, [方法说明](#format_params)|v1.0.0|
|`format(str, locale)`|`str: string`</br>`locale: 'zh'\|'en'`|N|`str: 'YYYY-MM-dd hh:mm:ss'`</br>`locale: 'zh'`|格式化时间, [方法说明](#format_params)|v3.0.0|
|`add(count, type)`|`count: number`</br>`type: string`|N|`count: 0`</br>`type: 'day'`|日期时间计算方法, [方法说明](#add)|v3.0.0
|`addTime(count, type)`|`count: number` </br> `type: 'h' \| 'm' \| 's'`|N|`count: 0`</br>`type: 'h'` | 时间加减</br> h: 小时数 </br> m: 分钟数 </br> s: 秒数|v1.0.0|
|`addDate(count, type)`| `count: number` </br> `type: 'd' \| 'm' \| 'y'`|N| `count: 0`</br>`type: 'd'` | 日期加减</br> y: 年数 </br> m: 月数 </br> d: 天数|v3.0.0|
|`addDay(count)`| `count: number`|N| `count: 0` |天数加减|v1.0.0|
|`addWeek(count)`| `count: number`|N|`count: 0`|星期加减|v1.0.0|
|`addMonth(count)`| `count: number`|N|`count: 0`|月份加减|v1.0.0|
|`addYear(count)`| `count: number`|N| `count: 0`|年份加减|v1.0.0|
|`getTime()`| `-`|N| `-` |获取时间戳|v1.0.0|
|`fromTo()`| `string\|Date`|N| `new Date()`[当前时间]| 获得相对时间, [方法说明](#fromTo)|v2.1.0|
|`clone()`|`-`|N|`-`|复制当前 `Moment` 对象|v3.0.0|

---

### 方法说明

**<span id="format_params">`format()`</span>**

|含义|字符|格式|版本|
|-|-|-|-|
|年|`YYYY\|Y\|yyyy\|y`|0000 - 9999|v1.0.0|
||`YY\|yy`|00 - 99|v1.0.0|
|月|`MMMM`|一月 - 十二月 `(zh)`</br> January - December `(en)`|v3.0.0|
||`MMM`|1月 - 12月 `(zh)`</br> Jan - Dec `(en)`|v3.0.0|
||`MM`|00 - 12|v1.0.0|
||`M`|0 - 12|v1.0.0|
|日|`DD`|一日 - 三十一日 `(zh)`</br>1st - 31st `(en)`|v3.0.0|
||`D`|1日 - 31日 `(zh)`</br>1 - 31 `(en)`|v3.0.0|
||`dd`|00 - 31|v1.0.0|
||`d`|1 - 31|v1.0.0|
|时|`HH`|00 - 24|v1.0.0|
||`H`|0 - 24|v1.0.0|
||`hh`|00 - 12|v1.0.0|
||`h`|0 - 12|v1.0.0|
|分|`mm`|00 - 60|v1.0.0|
||`m`|0 - 60|v1.0.0|
|秒|`ss`|00 - 60|v1.0.0|
||`s`|0 - 60|v1.0.0|
|子午线|`AA`|上午 / 下午|v2.2.0|
||`A`|AM / PM|v2.2.0|
||`a`|am / pm|v2.2.0|
|星期|`WWW`|星期日、星期一 ... 星期六 `(zh)`</br>Sunday、 Monday ... Saturday `(en)`|v3.0.0|
||`WW`|周日、周一 ... 周六 `(zh)`</br>Sun、Mon ... Sat `(en)`|v3.0.0|
||`W`|日、一 ... 六 `(zh)`</br>Su、Mo ... Sa `(en)`|v3.0.0|
||`w`|0 - 6|v2.2.0|
|季度|`Q`|一、二、三、四|v2.2.0|
||`q`|1 - 4|v2.2.0|

**<span id="fromTo">`fromTo()`</span>**

> 获取当前 `Moment` 对象与传入日期的差值 `moment(date).formTo(date)`

- 入参  
  标准日期格式字符串（如 YYYY-MM-DD HH:mm:ss）| `Date` 对象

- 返回值

  |属性名|说明|版本|
  |-|-|-|
  |`tag`|标记时间的前后，'-'表示之前；'+'表示之后|v2.1.0|
  |`years`| 相差的年月日时分秒中的年数(进制后)|v2.1.0|
  |`months`| 同上，相差月数|v2.1.0|
  |`days`| 同上，相差天数|v2.1.0|
  |`hours`| 同上，相差小时数|v2.1.0|
  |`minutes`| 同上，相差分钟数|v2.1.0|
  |`seconds`| 同上，相差秒数|v2.1.0|
  |`quarters`| 同上，相差的季度数|v3.0.0|
  |`weeks`| 同上，相差的周数|v3.0.0|
  |~~`o`~~| ~~总计相差的时间，包含年月日时分秒的集合~~ (v3.0.0以后移除)|~~v2.1.0~~|
  |`total`| 总计相差的时间，包含年月日时分秒的集合，向下取整 | v3.0.0|
  |`wholeTotal`| 总计相差的时间，包含年月日时分秒的集合，包含小数（精确值）|v3.0.0|
  |`format()`|格式化日期差方法 [方法说明](#fromTo_format)|v2.1.0|

- `fromTo().format().total` 与 `fromTo().format().years、fromTo().format().months ...` 等对比

> `fromTo().format().total` 日期时间总数，向下取整

> `fromTo().format().years、fromTo().format().months ...`分别包含 年、月、日...

  示例：moment('2022-11-12 12:00:04').fromTo('2020-12-10 1:10:34')
  |属性名|说明|示例对应值|
  |-|-|-|
  |`total.years`|包含总年数|1|
  |`format().years`|分别包含年数|1|
  |`total.months`|包含总月数|23|
  |`format().months`|分别包含月数|11|
  |`total.days`|包含总天数|702|
  |`format().days`|分别包含天数|2|
  |`total.hours`|包含总小时数|16858|
  |`format().hours`|分别包含小时数|10|
  |`total.minutes`|包含总分钟数|1011529|
  |`format().minutes`|分别包含分钟数|49|
  |`total.seconds`|包含总秒数|60691770|
  |`format().seconds`|分别包含秒数|30|
  |`total.quarters`|包含总季度数|7|
  // todo
  |`format().quarters`|分别包含季度数|7|
  |weeks|包含总周数量|100|

- <span id="fromTo_format">`fromTo().format()`</span>

  |方法名|参数类型|默认值|版本|方法说明|
  |-|-|-|-|-|
  |format|String|Null|v2.1.0|格式化相对日期|

**<span id="add">`add()`</span>**

> 日期时间计算方法

- 入参

  |参数|说明|必填|默认值|
  |-|-|-|-|
  |count|计算数量 number|N|0|
  |type|计量单位 string</br> `'year'\|'month'\|'day'\|'hour'\|'minute'\|'second'`|N|`'day'`|

- 返回值  
  `Moment` 对象

---

## 🔨 示例

<h2 style="text-align: center;">引入</h2>

```js
  import jsMoment from 'js-moment';
```

<h2 style="text-align: center;">日期格式化</h2>

```js
  const t = '2019-10-31 12:00:01';

  moment(t).format('YYYY-MM-dd');                 // 2019-10-31
  moment(t).format();                             // 2019-10-31 12:00:01
  moment(t).format('YYYY-MM-dd hh:mm:ss');        // 2019-10-31 12:00:01
  moment(t).format('YYYY年MM月dd日');             // 2019年10月31日
  moment(t).format('YY-M-d h:m:s');               // 19-10-31 12:0:1
  moment(t).format('YYYY-MM-dd 星期W AA h:m:s');  // 2019-10-31 星期四 下午 12:0:1
  moment(t).format('MMMMDD');                     // 十月三十一日
  moment(t).format('MMMM.DD.WW', 'en');           // October.31st.Thu
  moment(t).format('MMM dd, YYYY', 'en');         // Oct 31, 2019

```

<h2 style="text-align: center;">日期计算 format()</h2>

```js
  const t = '2019-10-31 12:00:01';

  moment(t).addYear(1);               // Moment {date: Sat Oct 31 2020 12:00:01 GMT+0800 (中国标准时间), dateObject: {…}}
  moment(t).addYear(1).format();      // 2020-10-31 12:00:01
  moment(t).addMonth(1).format();     // 2019-12-01 12:00:01
  moment(t).add(1).format();          // 2019-11-01 12:00:01
  moment(t).addDay(1).format();       // 2019-11-01 12:00:01
  moment(t).addTime(1).format();      // 2019-10-31 13:00:01
  moment(t).addTime(1, 'h').format(); // 2019-10-31 13:00:01
  moment(t).addTime(1, 'm').format(); // 2019-10-31 12:01:01
  moment(t).addTime(1, 's').format(); // 2019-10-31 12:00:02
```

<h2 style="text-align: center;">相对时间 formTo()</h2>

默认方法

```js
  const t = '2019-10-31 12:00:01';

  moment(t).fromTo();                               // {total: {…}, wholeTotal: {…}, tag: '+', years: 2, months: 6, …}, tag: "+", years: 0, months: 0, days: 0, …}
  moment(t).fromTo('2018-09-01 08:30:00').format(); // 1年1个月前
  moment(t).fromTo('2019-08-01 08:30:00').format(); // 2个月30天前
  moment(t).fromTo('2019-10-31 13:01:25').format(); // 1小时1分钟后
  moment(t).fromTo('2019-10-31 12:01:25').format(); // 1分钟24秒后
```

自定义格式

``` js
  moment(t).fromTo('2018-09-01 08:30:00').format('Y年M个月D天h小时m分钟s秒'); // 1年2个月5天3小时30分钟1秒
  moment(t).fromTo('2018-09-01 08:30:00').format('Y年M个月D天');   // 1年2个月5天
  moment(t).fromTo('2018-09-01 08:30:00').format('M个月D天h小时'); // 14个月5天3小时
  moment(t).fromTo('2018-09-01 08:30:00').format('h小时m分钟s秒'); // 10203小时30分钟
  // 通过属性自行构造显示格式 **不推荐使用，若有必要，请仔细阅读使用方法**
```

自定义拼接

``` js
  const { tag, total, times } = moment(t).fromTo('2018-09-01 08:30:00');
  `发布于${times.months}个月${total.days}天${tag === '-' ? '之前' : '以后'}` // 发布于14个月5天之前
  `距离高考还有：${times.days}天${total.hours}小时${total.minutes}分钟${total.seconds}秒` // 距离高考还有：425天 3小时 30分钟 1秒 
  `闹钟将于${times.hours}小时${total.minutes}分钟${total.seconds}秒后响起` // 闹钟将于3小时30分钟30秒后响起
```

注意：为方便使用，极大的提高方法的灵活性，本方法将所有时间参数均暴露出来，方法 `Moment.fromTo()` 返回

存于`total`和`Moment.fromTo()`两个内部对象当中，用于开发者自己组装满足自己需求的时间格式， 需要注意的是， `total`和`times`对象内的变量含义不同！`total`中的时间参数均为进制后的，而`times`中的则未进制，举个栗子：

**1年 2个月 5天 3小时 30分钟 1秒** 对应的属性值如下表：
|_|.years|.months|.days|.hours|.minutes|.seconds|
|-|-|-|-|-|-|-|
|times|1|14|425|10203|612210|36732601|
|total|1|2|5|3|30|1|

所以当我们想要自己拼接时间格式的时候，最大的单位值要取times中的对象，其他则取total中的，如上面的栗子  
|||||||
|-|-|-|-|-|-|
|1年|2个月|5天|3小时|30分钟|1秒|
||14个月|5天|3小时|30分钟|1秒|
|||425天|3小时|30分钟|1秒|
||||10203小时|30分钟|1秒|
|||||612210分钟|1秒|
||||||36732601秒|
         

## 更新日志

- **v3.0.0**  

  1. 添加 `typescript` 语法校验提示，在ts项目中会自动提示相关参数及说明；
  2. 更新 `format()` 方法，新增中英文区分（zh | en），新增 月份`MMMM、MMM`、星期 `WWW、WW`）等格式化规则，<span style="color: #f00">需要注意，在v3.0.0以后，'DD'表示大写日期，即'一月 - 十二月，小写日期用'dd'表示</span>参考[format方法说明](#format_params)；
  3. 重构 `formTo()` 方法，v3.0.0以前月份采用固定的30天来计算，v3.0.0以后则以自然月进行计算；
  4. 新增 `add()` 方法，参考[add()方法说明](#add)；
  5. `Moment` 对象新增 `time` 时间戳、`week` 星期、`quarter` 季度等字段；
  6. 修复其他已知bug；
  
- **v2.2.1**  
  切换到webpack5.0进行代码编译，切换ts进行开发；
- **v2.2.0**  
  增加 `format` 格式化方法的季度、星期等格式，详情见参数说明；
- **v2.1.0**  
  增加`fromTo`方法，用于获取**相对时间**， 详情见参数说明↑；
- **v2.0.0**
  1. 增加方法的链式调用，`moment().addDay()`等方法将会返回当前的`Moment`对象，如 `moment(t).addDay(1).addMonth(1).format()`；
  2. 修复ios设备格式化时间显示 `NAN` 的bug；
- **v1.0.0**
  基本的`moment`方法, 返回`Moment`对象，进行日期的计算及格式化等操作；

## 🔗 链接

- [项目地址](https://github.com/zhangjichengcc/moments)
- [my portfolio](https://portfolio.zhangjc.cn/)

## 🤝 参与共建

莫得参与，莫得共建，莫得赞助

- author zhangjicheng
- Email zhangjichengcc@163.com
