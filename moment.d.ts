/*
 * @Author: zhangjicheng
 * @Date: 2022-05-11 15:08:55
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-27 17:09:13
 * @FilePath: \wetaxe:\webspace\js-moment\moment.d.ts
 * @js-moment ts类型声明文件
 */

type localeProps = 'zh' | 'en'; 
type inputDate = Date | string;

/**
 * 日期操作方法
 * @param date 
 */
declare function moment(date?: inputDate): moment.Moment;

declare namespace moment {

  /**
   * 内置日期属性对象
   */
  interface DateObject {
    /**
     * 年
     */
    year: number;
    /**
     * 月 0-11
     */
    month: number;
    /**
     * 日 1-31
     */
    day: number;
    /**
     * 时 0-23
     */
    hours: number;
    /**
     * 分 0-60
     */
    minutes: number;
    /**
     * 秒 0-60
     */
    seconds: number;
    /**
     * 时间戳
     */
    time: number;
    /**
     * 星期 0-6
     */
    week: number;
    /**
     * 季度 0-3
     */
    quarter: number;
  }

  /**
   * formTo 方法返回对象
   */
  interface DateDiff {
    /**
     * 间隔日期总数（向下取整）
     */
    total: {
      /** 总年数 */
      years: number;
      /** 总月数 */
      months: number;
      /** 总季度数 */
      quarters: number;
      /** 总秒数 */
      seconds: number;
      /** 总分钟数 */
      minutes: number;
      /** 总小时数 */
      hours: number;
      /** 总天数 */
      days: number;
      /** 总周数 */
      weeks: number;
    };
    /**
     * 间隔日期总数 (精确小数)
     */
    wholeTotal: {
      /** 总年数 */
      years: number;
      /** 总月数 */
      months: number;
      /** 总季度数 */
      quarters: number;
      /** 总秒数 */
      seconds: number;
      /** 总分钟数 */
      minutes: number;
      /** 总小时数 */
      hours: number;
      /** 总天数 */
      days: number;
      /** 总周数 */
      weeks: number;
    };
    /** 日期间隔差值标记 */
    tag: '+' | '-';
    /** 进制后间隔年数 */
    years: number;
    /** 进制后间隔月数 */
    months: number;
    /** 进制后间隔季度数 */
    quarters: number;
    /** 进制后间隔周数 */
    weeks: number;
    /** 进制后间隔天数 */
    days: number;
    /** 进制后间隔小时数 */
    hours: number;
    /** 进制后间隔分钟数 */
    minutes: number;
    /** 进制后间隔秒数 */
    seconds: number;
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
    format: (rule: string) => string;
  }

  /**
   * Moment 对象
   */
  interface Moment {
    /**
     * Date 对象
     */
    date: Date;

    /**
     * 内置日期属性对象
     */
    dateObject: DateObject;

    /**
     * 复制Moment对象
     * @returns Moment
     */
    clone(): Moment;
    
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
     * @returns 格式化后的字符串
     */
    format(str?: string, locale?: localeProps): string;

    /**
    * 日期算法
    * @param val number 
    * @param type 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'
    * @returns Moment
    */
    add(val?: number, type?: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'): Moment;
    
    /**
     * 日期加减
     * @param val number
     * @param type 'y' | 'm' | 'd' 默认为 'd'
     * @returns Moment
     */
    addDate(val: number, type?: 'y' | 'm' | 'd'): Moment;

    /**
     * 时间加减
     * @param val number
     * @param type 'h' | 'm' | 's' 默认为 'h'
     * @returns 
     */
    addTime(val: number, type?: 'h' | 'm' | 's'): Moment;

    /**
     * 日期算法 日加减
     * @param val : number
     * @returns : Moment
     */
    addDay(val: number): Moment;

    /**
     * 日期算法 周加减
     * @param val : number
     * @returns : Moment
     */
    addWeek(val: number): Moment;

    /**
     * 日期算法 月加减
     * @param val : number
     * @returns : Moment
     */
    addMonth(val: number): Moment;

    /**
     * 日期算法 年加减
     * @param val : number
     * @returns : Moment
     */
    addYear(val: number): Moment;

    /**
     * 获取时间戳
     * @returns number
     */
    getTime(): number;

    /**
     * 获取当前月天数
     * @returns number
     */
    getDays(): number;

    /**
     * 获取相对时间
     * @param date string | Date | undefined
     * @returns DateDiff
     */
    fromTo(date?: inputDate): DateDiff;
  }
}


export default moment;
