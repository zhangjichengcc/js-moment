/**
 * 
 * @param date 
 */

/**
 * 装饰器-格式化输入
 */
function formatInput(date?: Date | string) {

  // ? 将 yyyy-mm-dd 转为 yyyy/mm/dd 处理ios new Date() 问题
  const _date: Date = typeof date === 'string' ? new Date((date as string).replace(/-/g, '/')) : new Date(date);
  // ! 进行入参校验，若格式不正确则抛出错误
  if (_date.toString() === 'Invalid Date') throw new Error('Incoming parameters Invalid Date');

  return function(target: any) {
    target.date = _date;
  }
}

const moment = (date?: string | Date) => {

  /* 格式化规则 */
  const formatRule = (dtime: Date) => {

    const _year = dtime.getFullYear();
    const _month = (dtime.getMonth() + 1);
    const _day = dtime.getDate();
    const _hours = dtime.getHours();
    const _minutes = dtime.getMinutes();
    const _seconds = dtime.getSeconds();
    const _weeks = dtime.getDay();
    const _quarter = parseInt(((Number(_month) - 1) / 3).toString(), 10) + 1;

    return {
      // 年
      YYYY: _year.toString(),
      yyyy: _year.toString(),
      YY: _year.toString().replace(/^[0-9]{2}([0-9]{2})$/,'$1'),
      yy: _year.toString().replace(/^[0-9]{2}([0-9]{2})$/,'$1'),
      y: _year.toString(),
      Y: _year.toString(),
      // 月
      MM: _month.toString().padStart(2, '0'),
      M: _month.toString(),
      // 日
      DD: _day.toString().padStart(2, '0'),
      dd: _day.toString().padStart(2, '0'),
      D: _day.toString(),
      d: _day.toString(),
      // 时
      HH: _hours.toString().padStart(2, '0'),
      H: _hours.toString(),
      hh: _hours === 12 ? '12' : (_hours % 12).toString().padStart(2, '0'),
      h:  _hours === 12 ? '12' : (_hours % 12).toString(),
      // 分
      mm: _minutes.toString().padStart(2, '0'),
      m: _minutes.toString(),
      // 秒
      ss: _seconds.toString().padStart(2, '0'),
      s: _seconds.toString(),
      // 星期
      W: ['日', '一', '二', '三', '四', '五', '六'][_weeks],
      w: _weeks, 
      // 上午/下午
      AA: _hours < 12 ? '上午' : '下午',
      A: _hours < 12 ? 'AM' : 'PM',
      a: _hours < 12 ? 'am' : 'pm',
      // 季度
      Q: ['一', '二', '三', '四'][_quarter],
      q: _quarter,
    } as const;
  };

  // 默认格式
  const defFormat: string = 'YYYY-MM-DD hh:mm:ss';

  // 生成时间对象
  const setDateObj = (newDate: Date) => {
    const nd = newDate || new Date();
    return {
      year: nd.getFullYear(),
      month: nd.getMonth(),
      day: nd.getDate(),
      hours: nd.getHours(),
      minutes: nd.getMinutes(),
      seconds: nd.getSeconds(),
      week: nd.getDay(),
    }
  }

  @formatInput(date)
  class Moment {
    date: any;
    dateObject: { year: any; month: any; day: any; hours: any; minutes: any; seconds: any; week: any; };
    formatDate: string;
    
    constructor(propDate: Date){
      this.date = propDate;
      this.dateObject = setDateObj(propDate);
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
      this.dateObject = setDateObj(newDate);
      return this;
    }

    // 日期算法 日期加减
    addDay(val = 0) {
      if(!this.date) return false;
      const newDate = new Date(this.date.getTime() + val * 24 * 60 * 60 * 1e3);
      this.date = newDate;
      this.dateObject = setDateObj(newDate);
      return this;
    }

    // 日期算法 星期加减
    addWeek(val = 0) {
      if(!this.date) return false;
      const newDate = new Date(this.date.getTime() + val * 24 * 60 * 60 * 1e3 * 7);
      this.date = newDate;
      this.dateObject = setDateObj(newDate);
      return this;
    }

    // 日期算法 月份加减
    addMonth(val = 0) {
      if(!this.date) return false;
      const { year, month, day, hours, minutes, seconds } = this.dateObject; 
      const newDate = new Date(year, month + val, day, hours, minutes, seconds);
      this.date = newDate;
      this.dateObject = setDateObj(newDate);
      return this;
    }

    // 日期算法 年份加减
    addYear(val = 0) {
      if(!this.date) return false;
      const { year, month, day, hours, minutes, seconds } = this.dateObject; 
      const newDate = new Date(year + val, month, day, hours, minutes, seconds);
      this.date = newDate;
      this.dateObject = setDateObj(newDate);
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
  return new Moment();
}

// export default moment;

moment()

debugger
