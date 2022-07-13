/*
 * @Author: zhangjicheng
 * @Date: 2022-05-19 10:14:19
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-13 18:28:16
 * @FilePath: \js-moment\src\class\Formatter.ts
 */

import Moment from '@class/Moment';
import locale, { localeProps } from '@/locale';

class Formatter {
  
  /** 年度 4位 */
  YYYY: string;
  /** 年度 4位 */
  yyyy: string;
  /** 年度 后2位 */
  YY: string;
  /** 年度 后2位 */
  yy: string;
  /** 年度 全4位 */
  Y: string;
  /** 年度 全4位 */
  y: string;
  /** 月份 大写 （zh: 一月 - 十二月 | en: January - December） */
  MMMM: string;
  /** 月份 小写 （zh: 1月 - 12月 | en: Jan - Dec） */
  MMM: string;
  /** 月份 2位 （01 - 12） */
  MM: string;
  /** 月份 不补位 （1 - 12） */
  M: string;
  /** 日 大写 （zh: 一日 - 三十一日 | en: 1st - 31st） */
  DD: string;
  /** 日 2位 （01 - 31） */
  dd: string;
  /** 日 小写 （zh: 1日 - 31日 | en: 1 - 31） */
  D: string;
  /** 日 不补位 （1 - 31） */
  d: string;
  /** 时 24小时制 2位 （00 - 23） */
  HH: string;
  /** 时 24小时制 不补位 （1 - 23） */
  H: string;
  /** 时 12小时制 2位 （00 - 12） */
  hh: string;
  /** 时 12小时制 不补位 （1 - 12） */
  h: string;
  /** 分 2位 （00 - 59） */
  mm: string;
  /** 分 不补位 （0 - 59） */
  m: string;
  /** 秒 2位 （00 - 59） */
  ss: string;
  /** 秒 不补位 （0 - 59） */
  s: string;
  /** 星期 完整 （zh: 星期日、星期一 - 星期六 | en: Sunday、Monday - Saturday） */
  WWW: string;
  /** 星期 简写 （zh: 周日、周一 - 周六 | en: Sun、Mon - Sat） */
  WW: string;
  /** 星期 缩写 （zh: 日、一 - 六 | en: Su、Mo - Sa） */
  W: string;
  /** 星期 数字 （0 - 6） */
  w: string;
  /** 子午线 （上午 | 下午） */
  AA: string;
  /** 子午线 （AM | PM） */
  A: string;
  /** 子午线 （am | pm） */
  a: string;
  /** 季度 四季 （zh：春、夏、秋、冬 | en: spring、summer、autumn、winter） */
  QQ: string;
  /** 季度 大写 （一、二、三、四） */
  Q: string;
  /** 季度 小写 （1、2、3、4） */
  q: string;
  
  constructor(moment: Moment, lang: localeProps) {
    const {
      year, month, day, hours, minutes, seconds, week, quarter
    } = moment.dateObject;

    const _locale = locale[lang];

    const _year    = String(year);
    const _month   = String(month + 1);
    const _day     = String(day);
    const _hours   = String(hours);
    const _minutes = String(minutes);
    const _seconds = String(seconds);
    const _weeks   = String(week);
    const _quarter = String(quarter + 1);

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
    this.DD    = _locale.days[day],
    this.dd    = _day.padStart(2, '0'),
    this.D     = _locale.daysShort[day],
    this.d     = _day,

    // 时
    this.HH    = _hours.padStart(2, '0'),
    this.H     = _hours,
    this.hh    = String((hours - 1) % 12 + 1).padStart(2, '0'),
    this.h     = String((hours - 1) % 12 + 1),

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
    this.QQ    = _locale.quarter[quarter],
    this.Q     = ['一', '二', '三', '四'][quarter],
    this.q     = _quarter
  }
}

export default Formatter;
