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
    const wholeMonthDiff = 
      (maxDate.dateObject.year - minDate.dateObject.year) * 12 + 
      (maxDate.dateObject.month - minDate.dateObject.month);
    // todo 锚点日期：起始（min）日期增加月份差值, 此时使两个日期达到相同月份，以此来比较日的大小
    const anchor = minDate.clone().addMonth(wholeMonthDiff);
    // ! 若锚点日期大于最大日期（max）则表示日差不足一个月，需要 -1
    return anchor.getTime() > maxDate.getTime() ? wholeMonthDiff - 1 : wholeMonthDiff;
  }

  // 获取取余后剩余天数
  function singleDayDiff(minDate: Moment, maxDate: Moment): number {
    // 日期差，此时还需考虑日期差为负数及小时差不足1天的情况
    let diffDays = maxDate.dateObject.day - minDate.dateObject.day;
    // 整体天数差 （不考虑小时带来的影响）
    // 此处不能以wholeTotal.days来计算，因为这里直接获取日期的差值，而wholeTotal是整体，会加入时间所带来的影响
    // const wholeDayDiff = Math.ceil(wholeTotal.days);
    // 构建新的Date对象，将时分秒格式化为0，以此计算相差天数
    const wholeDayDiff = (
      new Date(maxDate.dateObject.year, maxDate.dateObject.month, maxDate.dateObject.day
    ).getTime() -
      new Date(minDate.dateObject.year, minDate.dateObject.month, minDate.dateObject.day)
    .getTime()) / (24*60*60*1000);
    // todo 锚点日期：起始（min）日期增加天数差值, 此时使两个日期达到相同日，以此来比较时间的大小
    const anchor = minDate.clone().addDay(wholeDayDiff);
    // minDate的最后一个月的天数
    const minDateMonthDays = minDate.getDays();
    // ! 若锚点日期大于最大日期（max）则表示小时差不足一天，需要 -1
    diffDays += anchor.getTime() > maxDate.getTime() ? -1 : 0;
    // ! 若日期差为负数，则表示相差不足一个月，需要加上minDate的最后一个月的天数
    diffDays += diffDays < 0 ? minDateMonthDays : 0;
    return diffDays;
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
    weeks    : absDiffMs / 6048e5, // 1000 * 60 * 60 * 24 * 7
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
   * @param rule string 
   * @returns 
   */
  function format(rule?: string) {
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
      str = 
        (years ? `${years}年` : '')+
        ((years || months) ? `${months}个月` : '')+
        ((!years && (months || days)) ? `${days}天` : '')+
        ((!years && !months && (days || hours)) ? `${hours}小时` : '')+
        ((!years && !months && !days && (hours || minutes)) ? `${minutes}分钟` : '')+
        ((!years && !months && !days && !hours && (minutes || seconds)) ? `${seconds}秒` : '')+
        (tag === '+' ? '后' : '前')
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
  } as const;
}

export {
  diff,
}