/*
 * @Author: zhangjicheng
 * @Date: 2022-05-19 10:14:19
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-19 19:07:04
 * @FilePath: \moments\src\class\Formatter.ts
 */

import Moment from './Moment.js';
import locale, { localeProps } from '../locale.js';

class Formatter extends Object {

  YYYY: string;
  yyyy: string;
  YY: string;
  yy: string;
  Y: string;
  y: string;

  MMMM: string;
  MMM: string;
  MM: string;
  M: string;

  DD: string;
  dd: string;
  D: string;
  d: string;

  HH: string;
  H: string;
  hh: string;
  h: string;

  mm: string;
  m: string;

  ss: string;
  s: string;

  WWW: string;
  WW: string;
  W: string;
  w: string;

  AA: string;
  A: string;
  a: string;

  Q: string;
  q: string;
  
  constructor(moment: Moment, lang: localeProps) {
    super();
    const {
      year, month, day, hours, minutes, seconds, week, quarter
    } = moment.dateObject;

    const _locale = locale[lang];

    const _year    = year.toString();
    const _month   = month.toString();
    const _day     = day.toString();
    const _hours   = hours.toString();
    const _minutes = minutes.toString();
    const _seconds = seconds.toString();
    const _weeks   = week.toString();
    const _quarter = quarter.toString();

    // 年
    this.YYYY  = _year,
    this.yyyy  = _year,
    this.YY    = _year.replace(/^[0-9]{2}([0-9]{2})$/,'$1'),
    this.yy    = _year.replace(/^[0-9]{2}([0-9]{2})$/,'$1'),
    this.y     = _year,
    this.Y     = _year,

    // 月
    this.MMMM  = _locale.months[month],
    this.MMM   = _locale.monthsShort[month],
    this.MM    = _month.padStart(2, '0'),
    this.M     = _month,

    // 日
    this.DD    = _day.padStart(2, '0'),
    this.dd    = _day.padStart(2, '0'),
    this.D     = _day,
    this.d     = _day,

    // 时
    this.HH    = _hours.padStart(2, '0'),
    this.H     = _hours,
    this.hh    = _hours.padStart(2, '0'),
    this.h     = _hours,

    // 分
    this.mm    = _minutes.toString().padStart(2, '0'),
    this.m     = _minutes.toString(),

    // 秒
    this.ss    = _seconds.toString().padStart(2, '0'),
    this.s     = _seconds.toString(),

    // 星期
    this.WWW   = _locale.weekdays[week],
    this.WW    = _locale.weekdaysShort[week],
    this.W     = _locale.weekdaysMin[week],
    this.w     = _weeks, 

    // 上午/下午
    this.AA    = Number(_hours) < 12 ? '上午' : '下午',
    this.A     = Number(_hours) < 12 ? 'AM' : 'PM',
    this.a     = Number(_hours) < 12 ? 'am' : 'pm',

    // 季度
    this.Q     = ['一', '二', '三', '四'][Number(_quarter)],
    this.q     = _quarter
  }
}

export default Formatter;
