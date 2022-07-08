var moment;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 181:
/***/ ((__unused_webpack_module, exports) => {


/*
 * @Author: zhangjicheng
 * @Date: 2022-05-18 18:20:53
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-23 10:41:23
 * @FilePath: \moments\src\class\DateObject.ts
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * 时间对象类
 */
class DateObject {
    constructor(date) {
        this.year = date.getFullYear(),
            this.month = date.getMonth(),
            this.day = date.getDate(),
            this.hours = date.getHours(),
            this.minutes = date.getMinutes(),
            this.seconds = date.getSeconds(),
            this.time = date.getTime(),
            this.week = date.getDay(),
            this.quarter = Math.floor(this.month / 3);
    }
}
exports["default"] = DateObject;


/***/ }),

/***/ 91:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * @Author: zhangjicheng
 * @Date: 2022-05-19 10:14:19
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-26 20:44:55
 * @FilePath: \js-moment\src\class\Formatter.ts
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const locale_1 = __importDefault(__webpack_require__(25));
class Formatter {
    constructor(moment, lang) {
        const { year, month, day, hours, minutes, seconds, week, quarter } = moment.dateObject;
        const _locale = locale_1.default[lang];
        const _year = String(year);
        const _month = String(month + 1);
        const _day = String(day);
        const _hours = String(hours);
        const _minutes = String(minutes);
        const _seconds = String(seconds);
        const _weeks = String(week);
        const _quarter = String(quarter + 1);
        // 年
        this.YYYY = _year,
            this.yyyy = _year,
            this.YY = _year.replace(/^[0-9]{2}([0-9]{2})$/, '$1'),
            this.yy = _year.replace(/^[0-9]{2}([0-9]{2})$/, '$1'),
            this.y = _year,
            this.Y = _year,
            // 月
            this.MMMM = _locale.months[month],
            this.MMM = _locale.monthsShort[month],
            this.MM = _month.padStart(2, '0'),
            this.M = _month,
            // 日
            this.DD = _locale.days[day],
            this.dd = _day.padStart(2, '0'),
            this.D = _locale.daysShort[day],
            this.d = _day,
            // 时
            this.HH = _hours.padStart(2, '0'),
            this.H = _hours,
            this.hh = String((hours - 1) % 12 + 1).padStart(2, '0'),
            this.h = String((hours - 1) % 12 + 1),
            // 分
            this.mm = _minutes.toString().padStart(2, '0'),
            this.m = _minutes.toString(),
            // 秒
            this.ss = _seconds.toString().padStart(2, '0'),
            this.s = _seconds.toString(),
            // 星期
            this.WWW = _locale.weekdays[week],
            this.WW = _locale.weekdaysShort[week],
            this.W = _locale.weekdaysMin[week],
            this.w = _weeks,
            // 上午/下午
            this.AA = Number(_hours) < 12 ? '上午' : '下午',
            this.A = Number(_hours) < 12 ? 'AM' : 'PM',
            this.a = Number(_hours) < 12 ? 'am' : 'pm',
            // 季度
            this.QQ = _locale.quarter[quarter],
            this.Q = ['一', '二', '三', '四'][quarter],
            this.q = _quarter;
    }
}
exports["default"] = Formatter;


/***/ }),

/***/ 302:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __importDefault(__webpack_require__(607));
const DateObject_1 = __importDefault(__webpack_require__(181));
const format_1 = __webpack_require__(128);
const diff_1 = __webpack_require__(521);
/**
 * 日期对象类
 */
class Moment {
    constructor(date) {
        this.date = date;
        this.dateObject = new DateObject_1.default(date);
    }
    /**
     * 复制Moment对象
     * @returns Moment
     */
    clone() {
        return new Moment(this.date);
    }
    /**
     * 日期格式化
     * @param str default 'yyyy-MM-dd HH:mm:ss';
     * @description 格式关键字说明 👇
     * @YYYY 年度 4位;
     * @yyyy 年度 4位;
     * @YY 年度 后2位;
     * @yy 年度 后2位;
     * @Y 年度 全4位;
     * @y 年度 全4位;
     * @MMMM 月份 大写 （zh: 一月 - 十二月 | en: January - December）;
     * @MMM 月份 小写 （zh: 1月 - 12月 | en: Jan - Dec）;
     * @MM 月份 2位 （01 - 12）;
     * @M 月份 不补位 （1 - 12）;
     * @DD 日 大写 （zh: 一日 - 三十一日 | en: 1st - 31st）;
     * @dd 日 2位 （01 - 31）;
     * @D 日 小写 （zh: 1日 - 31日 | en: 1 - 31）;
     * @d 日 不补位 （1 - 31）;
     * @HH 时 24小时制 2位 （00 - 23）;
     * @H 时 24小时制 不补位 （1 - 23）;
     * @hh 时 12小时制 2位 （00 - 12）;
     * @h 时 12小时制 不补位 （1 - 12）;
     * @mm 分 2位 （00 - 59）;
     * @m 分 不补位 （0 - 59）;
     * @ss 秒 2位 （00 - 59）;
     * @s 秒 不补位 （0 - 59）;
     * @WWW 星期 完整 （zh: 星期日、星期一 - 星期六 | en: Sunday、Monday - Saturday）;
     * @WW 星期 简写 （zh: 周日、周一 - 周六 | en: Sun、Mon - Sat）;
     * @W 星期 缩写 （zh: 日、一 - 六 | en: Su、Mo - Sa）；
     * @w 星期 数字 （0 - 6）;
     * @AA 子午线 （上午 | 下午）;
     * @A 子午线 （AM | PM）;
     * @a 子午线 （am | pm）;
     * @QQ 季度 四季 （zh：春、夏、秋、冬 | en: spring、summer、autumn、winter）
     * @Q 季度 大写 （一、二、三、四）;
     * @q 季度 小写 （1、2、3、4）;
     * @description 👆
     * @returns string 格式化后的字符串
     */
    format(str, locale) {
        locale = locale || 'zh'; // 默认为中文
        return format_1.format.call(this, str, locale);
    }
    /**
    * 日期算法
    * @param val: number
    * @param type: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' 默认为 'day'
    * @returns Moment
    */
    add(val, type) {
        val = val || 0;
        type = type || 'day';
        const { year, month, day, hours, minutes, seconds } = this.dateObject;
        const newDate = new Date(type === 'year' ? year + val : year, type === 'month' ? month + val : month, type === 'day' ? day + val : day, type === 'hour' ? hours + val : hours, type === 'minute' ? minutes + val : minutes, type === 'second' ? seconds + val : seconds);
        this.date = newDate;
        this.dateObject = new DateObject_1.default(newDate);
        return this;
    }
    /**
     * 日期加减
     * @param val number
     * @param type 'y' | 'm' | 'd' 默认为 'd'
     * @returns Moment
     */
    addDate(val = 0, type) {
        type = type || 'd';
        const trans = { y: 'year', m: 'month', d: 'day' };
        return this.add(val, trans[type]);
    }
    /**
     * 时间加减
     * @param val number
     * @param type 'h' | 'm' | 's' 默认为 'h'
     * @returns Moment
     */
    addTime(val = 0, type) {
        type = type || 'h';
        const trans = { h: 'hour', m: 'minute', s: 'second' };
        return this.add(val, trans[type]);
    }
    /**
     * 日期算法 日加减
     * @param val : number
     * @returns : Moment
     */
    addDay(val = 0) {
        return this.add(val, 'day');
    }
    /**
     * 日期算法 周加减
     * @param val : number
     * @returns : Moment
     */
    addWeek(val = 0) {
        const days = val * 7;
        return this.add(days, 'day');
    }
    /**
     * 日期算法 月加减
     * @param val : number
     * @returns : Moment
     */
    addMonth(val = 0) {
        return this.add(val, 'month');
    }
    /**
     * 日期算法 年加减
     * @param val : number
     * @returns : Moment
     */
    addYear(val = 0) {
        return this.add(val, 'year');
    }
    /**
     * 获取时间戳
     * @returns number
     */
    getTime() {
        return this.date.getTime();
    }
    /**
     * 获取当前月天数
     * @returns number
     */
    getDays() {
        const { year, month } = this.dateObject;
        return new Date(year, month, 0).getDate();
    }
    /**
     * 获取相对时间
     * @param date: string | Date | undefined
     * @returns Object
     */
    fromTo(date) {
        const begin = this, end = (0, index_1.default)(date);
        return (0, diff_1.diff)(begin, end);
    }
}
exports["default"] = Moment;


/***/ }),

/***/ 521:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.diff = void 0;
function diff(begin, end) {
    const absDiffMs = Math.abs(end.dateObject.time - begin.dateObject.time), tag = end.dateObject.time - begin.dateObject.time > 0 ? '+' : '-', [maxDate, minDate] = tag === '+' ? [end, begin] : [begin, end], diffMonths = monthDiff(minDate, maxDate);
    // 获取总计相差月数
    function monthDiff(minDate, maxDate) {
        // 整体月份差值（不考虑日带来的影响）
        const wholeMonthDiff = (maxDate.dateObject.year - minDate.dateObject.year) * 12 +
            (maxDate.dateObject.month - minDate.dateObject.month);
        // todo 锚点日期：起始（min）日期增加月份差值, 此时使两个日期达到相同月份，以此来比较日的大小
        const anchor = minDate.clone().addMonth(wholeMonthDiff);
        // ! 若锚点日期大于最大日期（max）则表示日差不足一个月，需要 -1
        return anchor.getTime() > maxDate.getTime() ? wholeMonthDiff - 1 : wholeMonthDiff;
    }
    // 获取取余后剩余天数
    function singleDayDiff(minDate, maxDate) {
        // 日期差，此时还需考虑日期差为负数及小时差不足1天的情况
        let diffDays = maxDate.dateObject.day - minDate.dateObject.day;
        // 整体天数差 （不考虑小时带来的影响）
        // 此处不能以wholeTotal.days来计算，因为这里直接获取日期的差值，而wholeTotal是整体，会加入时间所带来的影响
        // const wholeDayDiff = Math.ceil(wholeTotal.days);
        // 构建新的Date对象，将时分秒格式化为0，以此计算相差天数
        const wholeDayDiff = (new Date(maxDate.dateObject.year, maxDate.dateObject.month, maxDate.dateObject.day).getTime() -
            new Date(minDate.dateObject.year, minDate.dateObject.month, minDate.dateObject.day)
                .getTime()) / (24 * 60 * 60 * 1000);
        // todo 锚点日期：起始（min）日期增加天数差值, 此时使两个日期达到相同日，以此来比较时间的大小
        const anchor = minDate.clone().addDay(wholeDayDiff);
        // minDate的最后一个月的天数
        const minDateMonthDays = minDate.getDays();
        // ! 若锚点日期大于最大日期（max）则表示小时差不足一天，需要 -1
        diffDays += anchor.getTime() > maxDate.getTime() ? -1 : 0;
        // ! 若日期差为负数，则表示相差不足一个月，需要加上minDate的最后一个月的天数
        diffDays += diffDays < 0 ? minDateMonthDays : 0;
        return diffDays;
    }
    // 完整的日期数量总计，包括小数位
    const wholeTotal = {
        years: diffMonths / 12,
        months: diffMonths,
        quarters: diffMonths / 3,
        seconds: absDiffMs / 1e3,
        minutes: absDiffMs / 6e4,
        hours: absDiffMs / 36e5,
        days: absDiffMs / 864e5,
        weeks: absDiffMs / 6048e5, // 1000 * 60 * 60 * 24 * 7
    };
    // 日期数量总计，取整
    const total = Object.fromEntries(Object.entries(wholeTotal).map(([key, value]) => [key, Math.floor(value)]));
    // 分别包括数
    const years = total.years, months = total.months - total.years * 12, quarters = total.quarters, seconds = total.seconds - total.minutes * 60, minutes = total.minutes - total.hours * 60, hours = total.hours - total.days * 24, days = singleDayDiff(minDate, maxDate), weeks = total.weeks;
    /**
     * 间隔时间格式化方法
     * @param rule 日期格式化字符串
     *
     * @description 格式关键字说明 👇
     * @y 年数
     * @M 月数
     * @d 天数
     * @h 小时数
     * @m 分钟数
     * @s 秒数
     * @description 👆
     *
     * @returns string 格式化后字符串
     */
    function format(rule) {
        let str = '';
        if (rule) {
            str = rule;
            const objs = {
                y: years, M: months, d: days, h: hours, m: minutes, s: seconds
            };
            Object.keys(objs).forEach((key) => {
                str = str.replace(key, String(objs[key]));
            });
        }
        else {
            str =
                (years ? `${years}年` : '') +
                    (months ? `${months}个月` : '') +
                    ((!years && days) ? `${days}天` : '') +
                    ((!years && !months && hours) ? `${hours}小时` : '') +
                    ((!years && !months && !days && minutes) ? `${minutes}分钟` : '') +
                    ((!years && !months && !days && !hours && seconds) ? `${seconds}秒` : '') +
                    (tag === '+' ? '后' : '前');
        }
        return str;
    }
    return {
        total,
        wholeTotal,
        tag,
        years,
        months,
        quarters,
        weeks,
        days,
        hours,
        minutes,
        seconds,
        format,
    };
}
exports.diff = diff;


/***/ }),

/***/ 128:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * @Author: zhangjicheng
 * @Date: 2022-05-13 18:45:07
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-27 17:47:34
 * @FilePath: \js-moment\src\format.ts
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.format = void 0;
const Formatter_1 = __importDefault(__webpack_require__(91));
// 默认格式
const defFormat = 'yyyy-MM-dd HH:mm:ss';
/**
 * 格式化日期方法
 * @param format: string
 * @returns: string
 */
function format(format = defFormat, locale) {
    let formatStr = format;
    const formatter = new Formatter_1.default(this, locale);
    const keys = Object.keys(formatter);
    keys.forEach((key) => {
        // ? <%|%> 标记已匹配字符串，防止重复格式化
        const reg = new RegExp(`(?!<%*[^%>])${key}(?![^<%]*%>)`, 'g');
        formatStr = formatStr.replace(reg, `<%${formatter[key]}%>`);
    });
    // 移除字符串边界标记
    formatStr = formatStr.replace(/[<%|%>]/g, '');
    return formatStr;
}
exports.format = format;


/***/ }),

/***/ 607:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * @Author: zhangjicheng
 * @Date: 2022-05-11 11:54:31
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-26 22:55:36
 * @FilePath: \js-moment\src\index.ts
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(593);
const Moment_1 = __importDefault(__webpack_require__(302));
/**
 * 日期格式方法
 * @param date string | Date | undefined
 * @returns Moment
 */
function moment(date) {
    date = (0, utils_1.standardDate)(date);
    return new Moment_1.default(date);
}
exports["default"] = moment;


/***/ }),

/***/ 25:
/***/ ((__unused_webpack_module, exports) => {


/*
 * @Author: zhangjicheng
 * @Date: 2022-05-19 17:12:25
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-26 18:02:24
 * @FilePath: \js-moment\src\locale.ts
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const locale = {
    /**
     * 中文
     */
    zh: {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        days: '_一日_二日_三日_四日_五日_六日_七日_八日_九日_十日_十一日_十二日_十三日_十四日_十五日_十六日_十七日_十八日_十九日_二十日_二十一日_二十二日_二十三日_二十四日_二十五日_二十六日_二十七日_二十八日_二十九日_三十日_三十一日'.split('_'),
        daysShort: new Array(32).fill('').map((_item, idx) => `${idx}日`),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        quarter: '春_夏_秋_冬'.split('_'),
    },
    /**
     * English
     */
    en: {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        days: '_1st_2nd_3rd_4th_5th_6th_7th_8th_9th_10th_11th_12th_13th_14th_15th_16th_17th_18th_19th_20th_21st_22nd_23nd_24th_25th_26th_27th_28th_29th_30th_31st'.split('_'),
        daysShort: new Array(32).fill('').map((_item, idx) => idx.toString()),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        quarter: 'spring_summer_autumn_winter'.split('_'),
    }
};
exports["default"] = locale;


/***/ }),

/***/ 593:
/***/ ((__unused_webpack_module, exports) => {


/*
 * @Author: zhangjicheng
 * @Date: 2022-05-13 18:31:15
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-27 17:49:16
 * @FilePath: \js-moment\src\utils.ts
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.standardDate = void 0;
/**
 * 格式化日期，返回标准日期对象
 * @param string
 * @returns Date
 */
function standardDate(str) {
    let date = str || new Date;
    // ? 将 yyyy-mm-dd 转为 yyyy/mm/dd 处理ios new Date() 问题
    date = typeof date === 'string' ? new Date(date.replace(/-/g, '/')) : new Date(date);
    // todo 进行入参校验，若格式不正确则抛出错误
    if (date.toString() === 'Invalid Date')
        throw new Error('Incoming parameters Invalid Date');
    return date;
}
exports.standardDate = standardDate;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(607);
/******/ 	moment = __webpack_exports__;
/******/ 	
/******/ })()
;