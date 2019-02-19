/**
 * 日期处理方法
 *
 * @date 2018-11-06
 * @author zhangjicheng
 * @email zhangjichengcc@163.com
 */

const moment = (date) => {
  const now = new Date();
  const time = date ? new Date(date) : now;
  const formatRule = {
    // 年
    YYYY: time.getFullYear().toString(),
    yyyy: time.getFullYear().toString(),
    YY: time.getFullYear().toString().replace(/^[0-9]{2}([0-9]{2})$/,'$1'),
    yy: time.getFullYear().toString().replace(/^[0-9]{2}([0-9]{2})$/,'$1'),
    y: time.getFullYear().toString(),
    Y: time.getFullYear().toString(),
    // 月
    MM: (time.getMonth()+1).toString().replace(/^([0-9]{1})$/,'0$1'),
    M: (time.getMonth()+1).toString(),
    // 日
    DD: time.getDate().toString().replace(/^([0-9]{1})$/,'0$1'),
    dd: time.getDate().toString().replace(/^([0-9]{1})$/,'0$1'),
    D: time.getDate().toString(),
    d: time.getDate().toString(),
    // 时
    HH: time.getHours().toString().replace(/^([0-9]{1})$/,'0$1'),
    hh: time.getHours().toString().replace(/^([0-9]{1})$/,'0$1'),
    H: time.getHours() > 12 ? (time.getHours() % 12).toString() : (time.getHours()).toString(),
    h: time.getHours() > 12 ? (time.getHours() % 12).toString() : (time.getHours()).toString(),
    // 分
    mm: time.getMinutes().toString().replace(/^([0-9]{1})$/,'0$1'),
    m: time.getMinutes().toString(),
    // 秒
    ss: time.getSeconds().toString().replace(/^([0-9]{1})$/,'0$1'),
    s: time.getSeconds().toString(),
  };
  const defFormat = 'YYYY-MM-DD hh:mm:ss';
  class Moment{
    // 日期格式化
    format(format = defFormat) {
      let formatStr = format;
      const keys = Object.keys(formatRule);
      keys.forEach(key => {
        formatStr = formatStr.replace(key, formatRule[key]);
      })
      this.formatDate = formatStr;
      return formatStr;
    }

    // 日期算法
    addDay(day) {
      if(!time) return false;
      const newDate = new Date(time.getTime()+day*24*60*60*1e3);
      this.dataRes = newDate;
      return newDate;
    }

    // getTime
    getTime() {
      const tiems = time.getTime();
      this.tiems = tiems;
      return tiems;
    }
  }
  return new Moment(time);
}

export default moment;
