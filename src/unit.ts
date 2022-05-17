/*
 * @Author: zhangjicheng
 * @Date: 2022-05-13 18:39:46
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-17 19:01:16
 * @FilePath: \moments\src\unit.ts
 */

// @ts-nocheck
import { formatRule } from './format.ts';
import moment from './index.ts';

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
  time: number;
  week: number;

  constructor(date: Date) {
    this.year = date.getFullYear(),
    this.month = date.getMonth(),
    this.day = date.getDate(),
    this.hours = date.getHours(),
    this.minutes = date.getMinutes(),
    this.seconds = date.getSeconds(),
    this.time = date.getTime(),
    this.week = date.getDay()
  }
}

/**
 * 日期对象类
 */
class Moment {
  date: Date;
  dateObject: DateObject;
  
  constructor(date: Date) {
    this.date = date;
    this.dateObject = new DateObject(date);
  }
  
  /**
   * 日期格式化
   * @param: string, default 'YYYY-MM-DD hh:mm:ss'
   * @returns string
   */
  format(format = defFormat): string {
    let formatStr = format;
    const formatObjs: object = formatRule(this.date)
    const keys = Object.keys(formatObjs);
    keys.forEach((key: keyof typeof formatObjs) => {
      const reg = new RegExp(key, 'g');
      formatStr = formatStr.replace(reg, formatObjs[key]);
    })
    return formatStr;
  }

  /**
  * 日期算法 时间加减
  * @param val: number 
  * @param type: 'h' | 'm' | 's'
  * @returns Moment
  */
  addTime(val: number = 0, type?: 'h' | 'm' | 's'): Moment {
    type = type || 'h';
    const { year, month, day, hours, minutes, seconds } = this.dateObject; 
    const newDate = new Date(year, month, day, type === 'h' ? hours + val : hours, type === 'm' ? minutes + val : minutes, type === 's' ? seconds + val : seconds);
    this.date = newDate;
    this.dateObject = new DateObject(newDate);
    return this;
  }

  /**
   * 日期算法 日期加减
   * @param val : number
   * @returns : Moment
   */
  addDay(val: number = 0): Moment {
    const newDate = new Date(this.date.getTime() + val * 24 * 60 * 60 * 1e3);
    this.date = newDate;
    this.dateObject = new DateObject(newDate);
    return this;
  }

  /**
   * 日期算法 星期加减
   * @param val : number
   * @returns : Moment
   */
  addWeek(val: number = 0): Moment {
    const newDate = new Date(this.date.getTime() + val * 24 * 60 * 60 * 1e3 * 7);
    this.date = newDate;
    this.dateObject = new DateObject(newDate);
    return this;
  }

  /**
   * 日期算法 月份加减
   * @param val : number
   * @returns : Moment
   */
  addMonth(val: number = 0): Moment {
    const { year, month, day, hours, minutes, seconds } = this.dateObject; 
    const newDate = new Date(year, month + val, day, hours, minutes, seconds);
    this.date = newDate;
    this.dateObject = new DateObject(newDate);
    return this;
  }

  /**
   * 日期算法 年份加减
   * @param val : number
   * @returns : Moment
   */
  addYear(val: number = 0): Moment {
    const { year, month, day, hours, minutes, seconds } = this.dateObject; 
    const newDate = new Date(year + val, month, day, hours, minutes, seconds);
    this.date = newDate;
    this.dateObject = new DateObject(newDate);
    return this;
  }

  /**
   * 获取时间戳
   * @returns number
   */
  getTime(): number {
    return this.date.getTime();
  }

  // !注：每个月按30天处理
  /**
   * 获取相对时间
   * @param date: string | Date 
   * @returns 
   */
   fromTo(date: string | Date) {
    const { dateObject: oldDate } = this;
    const { dateObject: newDate } = moment(date);
    const diffTime = newDate.time - oldDate.time;
    // 日期标志
    const tag = diffTime >= 0 ? '+' : '-';
    // 相对时间（时间戳 ms）
    const ms = Math.abs(diffTime);
    const [maxDate, minDate] = tag === '+' ? [newDate, oldDate] : [oldDate, newDate];
    // ? 标准年，以 new Date(0,0,0) 为基准
    const standardDate = moment(new Date(0, 0, 1, 0, 0, 0)).dateObject;


    let diffDate = moment(
      new Date(maxDate.year - minDate.year, maxDate.month - minDate.month, maxDate.day - minDate.day + 1, maxDate.hours - minDate.hours, maxDate.minutes - minDate.minutes, maxDate.seconds - minDate.seconds)
    ).dateObject;

    // const diffDate = {
    //   years   : maxDate.years - minDate.years,
    //   months  : maxDate.months - minDate.months,
    //   days    : maxDate.days - minDate.days,
    //   hours   : maxDate.hours - minDate.hours,
    //   minutes : maxDate.minutes - minDate.minutes,
    //   seconds : maxDate.seconds - minDate.seconds
    // }
    
    // 分别包括数
    const years = diffDate.year - standardDate.year;
    const months = diffDate.month - standardDate.month;
    const days = diffDate.day - standardDate.day;
    const hours = diffDate.hours - standardDate.hours;
    const minutes = diffDate.minutes - standardDate.minutes;
    const seconds = diffDate.seconds - standardDate.seconds;

    // 总计数
    const times = {
      years,
      months: years * 12 + months,
      days: Math.floor(ms / (1000 * 60 * 60 * 24)),
      hours: Math.floor(ms / (1000 * 60 * 60)),
      minutes: Math.floor(ms / (1000 * 60)),
      seconds: Math.floor(ms / 1000),
    };
    // 分别包含
    const total = { years, months, days, hours, minutes, seconds };
 
    type formatStrParams = 'Y' | 'M' | 'D' | 'h' | 'm' | 's';
    /**
     * 格式化相对日期
     * @param rule: string 
     * @returns 
     */
    function format(rule: string) {
      let str = '';
      if (rule) {
        str = rule;
        const objs: {[key in formatStrParams]: number} = { 
          Y: years, M: months, D: days, h: hours, m: minutes, s: seconds
        };
        Object.keys(objs).forEach((key: formatStrParams) => {
          str = str.replace(key, String(objs[key]));
        })
      } else {
        str = `
          ${years ? `${years}年` : ''}
          ${years || months ? `${months}个月` : ''}
          ${!years && months || days ? `${days}天` : ''}
          ${!years && !months && days || hours ? `${hours}小时` : ''}
          ${!years && !months && !days && hours || minutes ? `${minutes}分钟` : ''}
          ${!years && !months && !days && !hours && minutes || seconds ? `${seconds}秒` : ''}
          ${tag === '+' ? '后' : '前'}
        `
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
