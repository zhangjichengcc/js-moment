import moment from "../index.js";
import DateObject from '../class/DateObject.js';
import { format } from '../format.js';
import { fromTo } from '../diff.js';


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
  format(str: string): string {
    return format(str);
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
    let { year, month, day, hours, minutes, seconds } = this.dateObject; 
    month -= 1; // * Date 对象的 month 为 0-11，此处需做-1处理
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

  /**
   * 获取当前月天数
   * @param date 
   * @returns number
   */
  getDays(): number {
    const { year, month } = this.dateObject;
    return new Date(year, month, 0).getDate()
  }

  /**
   * 获取相对时间
   * @param date: string | Date 
   * @returns 
   */
  fromTo(date: string | Date) {
    const begin = this, 
      end = moment(date);
    return fromTo(begin, end);
  }
}

export default Moment;
