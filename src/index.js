/**
 * 日期处理方法
 *
 * @date 2018-11-06
 * @author zhangjicheng
 * @email zhangjichengcc@163.com
 */

const moment = (date) => {
  const now = new Date();
  const time = date ? new Date(date.replace(/-/g, '/')) : now;
  const formatRule = (d) => {
    const dtime = d || new Date();
    return {
      // 年
      YYYY: dtime.getFullYear().toString(),
      yyyy: dtime.getFullYear().toString(),
      YY: dtime.getFullYear().toString().replace(/^[0-9]{2}([0-9]{2})$/,'$1'),
      yy: dtime.getFullYear().toString().replace(/^[0-9]{2}([0-9]{2})$/,'$1'),
      y: dtime.getFullYear().toString(),
      Y: dtime.getFullYear().toString(),
      // 月
      MM: (dtime.getMonth()+1).toString().replace(/^([0-9]{1})$/,'0$1'),
      M: (dtime.getMonth()+1).toString(),
      // 日
      DD: dtime.getDate().toString().replace(/^([0-9]{1})$/,'0$1'),
      dd: dtime.getDate().toString().replace(/^([0-9]{1})$/,'0$1'),
      D: dtime.getDate().toString(),
      d: dtime.getDate().toString(),
      // 时
      HH: dtime.getHours().toString().replace(/^([0-9]{1})$/,'0$1'),
      hh: dtime.getHours().toString().replace(/^([0-9]{1})$/,'0$1'),
      H: dtime.getHours() > 12 ? (dtime.getHours() % 12).toString() : (dtime.getHours()).toString(),
      h: dtime.getHours() > 12 ? (dtime.getHours() % 12).toString() : (dtime.getHours()).toString(),
      // 分
      mm: dtime.getMinutes().toString().replace(/^([0-9]{1})$/,'0$1'),
      m: dtime.getMinutes().toString(),
      // 秒
      ss: dtime.getSeconds().toString().replace(/^([0-9]{1})$/,'0$1'),
      s: dtime.getSeconds().toString(),
    }

  };
  const defFormat = 'YYYY-MM-DD hh:mm:ss';
  const setDateObj = (newDate) => {
    const nd = newDate || new Date();
    return {
      year: nd.getFullYear(),
      month: nd.getMonth(),
      day: nd.getDate(),
      hours: nd.getHours(),
      minutes: nd.getMinutes(),
      seconds: nd.getSeconds(),
    }
  }
  class Moment{
    constructor(propDate){
      this.date = propDate;
      this.dateObject = setDateObj(propDate);
    }
    
    // 日期格式化
    format(format = defFormat) {
      let formatStr = format;
      const keys = Object.keys(formatRule(this.date));
      keys.forEach(key => {
        formatStr = formatStr.replace(key, formatRule(this.date)[key]);
      })
      this.formatDate = formatStr;
      return formatStr;
    }

    // 日期算法 时间加减 h/m/s
    addTime(val = 0, type = 'h') {
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
      const newDate = new Date(this.date.getTime()+val*24*60*60*1e3);
      this.date = newDate;
      this.dateObject = setDateObj(newDate);
      return this;
    }

    // 日期算法 星期加减
    addWeek(val = 0) {
      if(!this.date) return false;
      const newDate = new Date(this.date.getTime()+val*24*60*60*1e3*7);
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
    fromTo(t) {
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
      const format = rule => {
        let str = '';
        if (rule) {
          str = rule;
          const objs = { Y: years, M: months, D: days, h: hours, m: minutes, s: seconds };
          const keys = ['Y', 'M', 'D', 'h', 'm', 's'];
          for (let i = 0; i < keys.length; i += 1) {
            const key = keys[i];
            if (rule.includes(key)) {
              // eslint-disable-next-line no-eval
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
  return new Moment(time);
}

export default moment;
