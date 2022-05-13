/*
 * @Author: zhangjicheng
 * @Date: 2022-05-13 18:45:07
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-13 18:48:07
 * @FilePath: \moments\src\format.ts
 */

/**
 * 格式化日期
 * @param date 
 * @returns 
 */
function formatRule(date: Date) {

  const _year      =   date.getFullYear();
  const _month     =   (date.getMonth() + 1);
  const _day       =   date.getDate();
  const _hours     =   date.getHours();
  const _minutes   =   date.getMinutes();
  const _seconds   =   date.getSeconds();
  const _weeks     =   date.getDay();
  const _quarter   =   parseInt(((Number(_month) - 1) / 3).toString(), 10) + 1;

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

export {
  formatRule,
}
