import moment from "../index.js";
import DateObject from '../class/DateObject.js';
import { format } from '../format.js';
import { diff } from '../diff.js';
import { localeProps } from '../locale.js';


// 默认格式
const defFormat: string = 'YYYY-MM-DD hh:mm:ss';

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
   * 复制Moment对象
   * @returns Moment
   */
  clone(): Moment {
    return new Moment(this.date)
  }
  
  /**
   * 日期格式化
   * @param: string, default 'YYYY-MM-DD hh:mm:ss'
   * @returns string
   */
  format(str?: string, locale?: localeProps): string {
    locale = locale || 'zh'; // 默认为中文
    return format.call(this, str, locale);
  }

  /**
  * 日期算法
  * @param val: number 
  * @param type: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'
  * @returns Moment
  */
  add(val: number = 0, type: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'): Moment {
    const { year, month, day, hours, minutes, seconds } = this.dateObject; 
    const newDate = new Date(
      type === 'year' ? year + val : year,
      type === 'month' ? month + val : month,
      type === 'day' ? day + val : day,
      type === 'hour' ? hours + val : hours,
      type === 'minute' ? minutes + val : minutes,
      type === 'second' ? seconds + val : seconds,
    );
    this.date = newDate;
    this.dateObject = new DateObject(newDate);
    return this;
  }
  
  /**
   * 日期加减
   * @param val number
   * @param type 'y' | 'm' | 'd' 默认为 'd'
   * @returns Moment
   */
  addDate(val: number = 0, type?: 'y' | 'm' | 'd'): Moment {
    type = type || 'd';
    const trans = {y: 'year', m: 'month', d: 'day'} as const;
    return this.add(val, trans[type]);
  }

  /**
   * 时间加减
   * @param val number
   * @param type 'h' | 'm' | 's'
   * @returns 
   */
  addTime(val: number = 0, type?: 'h' | 'm' | 's'): Moment {
    type = type || 'h';
    const trans = {h: 'hour', m: 'minute', s: 'second'} as const;
    return this.add(val, trans[type]);
  }

  /**
   * 日期算法 日加减
   * @param val : number
   * @returns : Moment
   */
  addDay(val: number = 0): Moment {
    return this.add(val, 'day');
  }

  /**
   * 日期算法 周加减
   * @param val : number
   * @returns : Moment
   */
  addWeek(val: number = 0): Moment {
    const days = val * 7;
    return this.add(days, 'day');
  }

  /**
   * 日期算法 月加减
   * @param val : number
   * @returns : Moment
   */
  addMonth(val: number = 0): Moment {
    return this.add(val, 'month');
  }

  /**
   * 日期算法 年加减
   * @param val : number
   * @returns : Moment
   */
  addYear(val: number = 0): Moment {
    return this.add(val, 'year');
  }

  /**
   * 获取时间戳
   * @returns number
   */
  getTime(): number {
    return this.date.getTime();
  }

  /**
   * 获取当前月天数
   * @returns number
   */
  getDays(): number {
    const { year, month } = this.dateObject;
    return new Date(year, month, 0).getDate()
  }

  /**
   * 获取相对时间
   * @param date: string | Date | undefined
   * @returns string
   */
  fromTo(date?: string | Date) {
    const begin = this, 
      end = moment(date);
    return diff(begin, end);
  }
}

export default Moment;
