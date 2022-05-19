import Moment from './class/Moment.js';

/**
 * 获取相对时间
 * @param begin: Moment
 * @param end: Moment
 * @returns 
*/
function diff(begin: Moment, end: Moment) {
  const
    absDiffMs = Math.abs(end.dateObject.time - begin.dateObject.time),
    tag = end.dateObject.time - begin.dateObject.time > 0 ? '+' : '-',
    [maxDate, minDate]: [maxDate: Moment, minDate: Moment] = tag === '+' ? [end, begin] : [begin, end],
    diffMonths = monthDiff(minDate, maxDate);

  // 获取总计相差月数
  function monthDiff(minDate: Moment, maxDate: Moment): number {
    // 整体月份差值（不考虑日带来的影响）
    const wholeMonthDiff = (maxDate.dateObject.year - minDate.dateObject.year) * 12 + (maxDate.dateObject.month - minDate.dateObject.month),
    // 锚点日期：起始（min）日期增加月份差值
    anchor = minDate.clone().addMonth(wholeMonthDiff);
    // 若锚点日期大于最大日期（max）则表示日差不足一个月，需要 -1
    return anchor.getTime() > maxDate.getTime() ? wholeMonthDiff - 1 : wholeMonthDiff;
  }

  // 获取取余后剩余天数
  function singleDayDiff(minDate: Moment, maxDate: Moment): number {
    let diffMonths = maxDate.dateObject.day - minDate.dateObject.day;
    const minDateMonthDays = minDate.getDays();
    diffMonths += diffMonths > 0 ? 0 : minDateMonthDays;
    return diffMonths;
  }

  // 完整的日期数量总计，包括小数位
  const wholeTotal = {
    years    : diffMonths / 12,
    months   : diffMonths,
    quarters : diffMonths / 3,
    seconds  : absDiffMs / 1e3,    // 1000
    minutes  : absDiffMs / 6e4,    // 1000 * 60
    hours    : absDiffMs / 36e5,   // 1000 * 60 * 60
    days     : absDiffMs / 864e5,  // 1000 * 60 * 60 * 24
    week     : absDiffMs / 6048e5, // 1000 * 60 * 60 * 24 * 7
  }

  // 日期数量总计，取整
  const total = Object.fromEntries(Object.entries(wholeTotal).map(([key, value]) => [key, Math.floor(value)]));

  
  // 分别包括数
  const 
    years    = total.years,
    months   = total.months - total.years * 12,
    quarters = total.quarters,
    seconds  = total.seconds - total.minutes * 60,
    minutes  = total.minutes - total.hours * 60,
    hours    = total.hours - total.days * 24,
    days     = singleDayDiff(minDate, maxDate),
    weeks    = total.week;

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
    total,
    wholeTotal,
    tag,
    years,
    months,
    quarters,
    weeks,
    days,
    hours,
    minutes,
    seconds,
    format,
  }
}

export {
  diff,
}