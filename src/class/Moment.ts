import moment from "../index";
import DateObject from '../class/DateObject';
import { format } from '../format';
import { diff } from '../diff';
import { localeProps } from '../locale';

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
  format(str?: string, locale?: localeProps): string {
    locale = locale || 'zh'; // 默认为中文
    return format.call(this, str, locale);
  }

  /**
  * 日期算法
  * @param val: number 
  * @param type: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' 默认为 'day'
  * @returns Moment
  */
  add(val?: number, type?: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'): this {
    val = val || 0;
    type = type || 'day';
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
  addDate(val: number = 0, type?: 'y' | 'm' | 'd'): this {
    type = type || 'd';
    const trans = {y: 'year', m: 'month', d: 'day'} as const;
    return this.add(val, trans[type]);
  }

  /**
   * 时间加减
   * @param val number
   * @param type 'h' | 'm' | 's' 默认为 'h'
   * @returns Moment
   */
  addTime(val: number = 0, type?: 'h' | 'm' | 's'): this {
    type = type || 'h';
    const trans = {h: 'hour', m: 'minute', s: 'second'} as const;
    return this.add(val, trans[type]);
  }

  /**
   * 日期算法 日加减
   * @param val : number
   * @returns : Moment
   */
  addDay(val: number = 0): this {
    return this.add(val, 'day');
  }

  /**
   * 日期算法 周加减
   * @param val : number
   * @returns : Moment
   */
  addWeek(val: number = 0): this {
    const days = val * 7;
    return this.add(days, 'day');
  }

  /**
   * 日期算法 月加减
   * @param val : number
   * @returns : Moment
   */
  addMonth(val: number = 0): this {
    return this.add(val, 'month');
  }

  /**
   * 日期算法 年加减
   * @param val : number
   * @returns : Moment
   */
  addYear(val: number = 0): this {
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
   * @returns Object
   */
  fromTo(date?: string | Date) {
    const begin = this, 
      end = moment(date);
    return diff(begin, end);
  }
}

export default Moment;
