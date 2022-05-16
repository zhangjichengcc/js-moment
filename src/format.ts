/*
 * @Author: zhangjicheng
 * @Date: 2022-05-13 18:45:07
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-16 14:36:42
 * @FilePath: \moments\src\format.ts
 */

/**
 * 格式化日期
 * @param date 
 * @returns 
 */
function formatRule(date: Date) {

  const _year      =   date.getFullYear().toString();
  const _month     =   (date.getMonth() + 1).toString();
  const _day       =   date.getDate().toString();
  const _hours     =   date.getHours().toString();
  const _minutes   =   date.getMinutes().toString();
  const _seconds   =   date.getSeconds().toString();
  const _weeks     =   date.getDay().toString();
  // const _quarter   =   parseInt(((Number(_month) - 1) / 3).toString(), 10) + 1;
  const _quarter   =   Math.ceil(Number(_month) / 3).toString();

  return {
    // 年
    YYYY  : _year,
    yyyy  : _year,
    YY    : _year.replace(/^[0-9]{2}([0-9]{2})$/,'$1'),
    yy    : _year.replace(/^[0-9]{2}([0-9]{2})$/,'$1'),
    y     : _year,
    Y     : _year,
    // 月
    MM    : _month.padStart(2, '0'),
    M     : _month,
    // 日
    DD    : _day.padStart(2, '0'),
    dd    : _day.padStart(2, '0'),
    D     : _day,
    d     : _day,
    // 时
    HH    : _hours.padStart(2, '0'),
    H     : _hours,
    hh    : String((Number(_hours)-1) / 12 + 1).padStart(2, '0'),
    h     : String((Number(_hours)-1) / 12 + 1),
    // 分
    mm    : _minutes.toString().padStart(2, '0'),
    m     : _minutes.toString(),
    // 秒
    ss    : _seconds.toString().padStart(2, '0'),
    s     : _seconds.toString(),
    // 星期
    W     : ['日', '一', '二', '三', '四', '五', '六'][Number(_weeks)],
    w     : _weeks, 
    // 上午/下午
    AA    : Number(_hours) < 12 ? '上午' : '下午',
    A     : Number(_hours) < 12 ? 'AM' : 'PM',
    a     : Number(_hours) < 12 ? 'am' : 'pm',
    // 季度
    Q     : ['一', '二', '三', '四'][Number(_quarter)],
    q     : _quarter,
  } as const;
};

export {
  formatRule,
}
