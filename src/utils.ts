/*
 * @Author: zhangjicheng
 * @Date: 2022-05-13 18:31:15
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-11-07 14:29:33
 * @FilePath: \js-moment\src\utils.ts
 */

interface DateArgs {
  year: number,
  month: number,
  day:number,
  hour: number,
  minute: number,
  second: number,
}

function Str2Date(str: string): Date {
  // 是否为UTC时间
  const isUTC = /^\d{4}[\\/|-]\d{2}[\\/|-]\d{2}T\d{2}:\d{2}:\d{2}/.test(str);
  let date;
  if (isUTC) {
    // 获取日期数组
    const dateArr = str
    // ? 处理UTC日期格式 yyyy-MM-dd'T'HH:mm:ss.SSSZ
    .replace(/T/g, ' ')
    .replace(/\.\d{3}Z/g, '')
    // 获取日期数组
    .match(/(\d{4})[\\/|-](\d{1,2})[\\/|-](\d{1,2})\s(\d{1,2}):(\d{1,2}):(\d{1,2})/);
    if (!Array.isArray(dateArr)) throw new Error('Incoming parameters Invalid Date');
    const arr = dateArr.splice(1).map(i => Number(i));
    const [year, , day, , minute, second] = arr;
    let [, month, , hour] = arr;
    // UTC时间处理时差
    hour += 8;
    month -= 1;
    date = new Date(year, month, day, hour, minute, second);
  } else {
    date = new Date(str.replace(/-/g,  '/'));
  }
  if (date.toString() === 'Invalid Date') throw new Error('Incoming parameters Invalid Date');
  return date;
}

/**
 * 格式化日期，返回标准日期对象
 * @param string 
 * @returns Date
 */
 function standardDate(str?: string | Date): Date {
  let date = str || new Date;
  if (typeof date === 'string') {
    const dateArgs = Str2Date(date);
    if (!dateArgs) throw new Error('Incoming parameters Invalid Date');
    const { year, month, hour, minute, second } = dateArgs;
    let { day } = dateArgs;
    if (/^\d{4}\/\d{2}\/\d{2}T\d{2}:\d{2}:\d{2}/.test(date)) day += 8;
    date = new Date(year, month, day, hour, minute, second);
  }
  return date;
}

export {
  standardDate,
}