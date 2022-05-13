/*
 * @Author: zhangjicheng
 * @Date: 2022-05-13 18:39:46
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-13 18:54:29
 * @FilePath: \moments\src\unit.ts
 */

import { formatRule } from './format';
import moment from './index';

// 默认格式
const defFormat: string = 'YYYY-MM-DD hh:mm:ss';


/**
 * 时间对象类
 */
class DateObject {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
  week: number;

  constructor(date: Date) {
    this.year = date.getFullYear(),
    this.month = date.getMonth(),
    this.day = date.getDate(),
    this.hours = date.getHours(),
    this.minutes = date.getMinutes(),
    this.seconds = date.getSeconds(),
    this.week = date.getDay()
  }
}

/**
 * 日期对象类
 */
class Moment {
  date: any;
  dateObject: DateObject;
  formatDate: string;
  
  constructor(date: Date) {
    this.date = date;
    this.dateObject = new DateObject(date);
  }
  
  // 日期格式化
  format(format = defFormat) {
    let formatStr = format;
    const formatObjs: object = formatRule(this.date)
    const keys = Object.keys(formatObjs);
    // function exChange<K extends keyof typeof formatObjs>(key: K) {
    //   return formatObjs[key]
    // }
    keys.forEach((key: keyof typeof formatObjs) => {
      const reg = new RegExp(key, 'g');
      formatStr = formatStr.replace(reg, formatObjs[key]);
    })
    return this.formatDate = formatStr;
  }

  // 日期算法 时间加减 h/m/s
  addTime(val = 0, type = 'h'): any {
    if(!this.date) return false;
    const { year, month, day, hours, minutes, seconds } = this.dateObject; 
    const newDate = new Date(year, month, day, type === 'h' ? hours + val : hours, type === 'm' ? minutes + val : minutes, type === 's' ? seconds + val : seconds);
    this.date = newDate;
    this.dateObject = new DateObject(newDate);
    return this;
  }

  // 日期算法 日期加减
  addDay(val = 0) {
    if(!this.date) return false;
    const newDate = new Date(this.date.getTime() + val * 24 * 60 * 60 * 1e3);
    this.date = newDate;
    this.dateObject = new DateObject(newDate);
    return this;
  }

  // 日期算法 星期加减
  addWeek(val = 0) {
    if(!this.date) return false;
    const newDate = new Date(this.date.getTime() + val * 24 * 60 * 60 * 1e3 * 7);
    this.date = newDate;
    this.dateObject = new DateObject(newDate);
    return this;
  }

  // 日期算法 月份加减
  addMonth(val = 0) {
    if(!this.date) return false;
    const { year, month, day, hours, minutes, seconds } = this.dateObject; 
    const newDate = new Date(year, month + val, day, hours, minutes, seconds);
    this.date = newDate;
    this.dateObject = new DateObject(newDate);
    return this;
  }

  // 日期算法 年份加减
  addYear(val = 0) {
    if(!this.date) return false;
    const { year, month, day, hours, minutes, seconds } = this.dateObject; 
    const newDate = new Date(year + val, month, day, hours, minutes, seconds);
    this.date = newDate;
    this.dateObject = new DateObject(newDate);
    return this;
  }

  // 获得时间戳
  getTime() {
    return this.date.getTime();
  }

  // 日期算法 相对时间
  // 注：每个月按30天处理
  fromTo(t: string | Date) {
    const { date: oldDate } = this;
    const { date: newDate } = moment(t);
    const getTimes = newDate.getTime() - oldDate.getTime();
    const tag = getTimes >= 0 ? '+' : '-';
    const ms = Math.abs(getTimes);
    // 总计数
    const Y = Math.floor(ms / (1000 * 60 * 60 * 24 * 30 * 12));
    const M = Math.floor(ms / (1000 * 60 * 60 * 24 * 30));
    const D = Math.floor(ms / (1000 * 60 * 60 * 24));
    const h = Math.floor(ms / (1000 * 60 * 60));
    const m = Math.floor(ms / (1000 * 60));
    const s = Math.floor(ms / 1000);
    // 分别包括数
    const years = Y;
    const months = M - Y * 12;
    const days = D - M * 30;
    const hours = h - D * 24;
    const minutes = m - h * 60;
    const seconds = s - m * 60;
    const times = { years: Y, months: M, days: D, hours: h, minutes: m, seconds: s };
    const total = { years, months, days, hours, minutes, seconds };
    // 格式化相对日期
    const format = (rule: string) => {
      let str = '';
      if (rule) {
        str = rule;
        const objs: {[key: string]: any} = { Y: years, M: months, D: days, h: hours, m: minutes, s: seconds };
        const keys = ['Y', 'M', 'D', 'h', 'm', 's'];
        for (let i = 0; i < keys.length; i += 1) {
          const key = keys[i];
          if (rule.includes(key)) {
            objs[key] = eval(key);
            break;
          } else {
            objs[key] = null;
          }
        }
        Object.keys(objs).forEach(key => {
          str = str.replace(key, objs[key])
        })
      } else if (years) {
        str = `${years}年${months ? `${months}个月` : ''}${tag === '+' ? '后':'前'}`;
      } else if (months) {
        str = `${months}个月${days ? `${days}天` : ''}${tag === '+' ? '后':'前'}`;
      } else if (days) {
        str = `${days}天${hours ? `${hours}小时` : ''}${tag === '+' ? '后':'前'}`;
      } else if (hours) {
        str = `${hours}小时${minutes ? `${minutes}分钟` : ''}${tag === '+' ? '后':'前'}`;
      } else if (minutes) {
        str = `${minutes}分钟${seconds ? `${seconds}秒` : ''}${tag === '+' ? '后':'前'}`;
      } else {
        str = `${seconds}秒${tag === '+' ? '后':'前'}`;
      }
      return str;
    }
    return {
      times,
      total,
      tag,
      years,
      months,
      days,
      hours,
      minutes,
      seconds,
      format,
    }
  }
}

export {
  DateObject,
  Moment,
}
