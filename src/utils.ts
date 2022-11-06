/*
 * @Author: zhangjicheng
 * @Date: 2022-05-13 18:31:15
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-11-07 00:36:23
 * @FilePath: /js-moment/src/utils.ts
 */

/**
 * 格式化日期，返回标准日期对象
 * @param string 
 * @returns Date
 */
 function standardDate(str?: string | Date): Date {
  let date = str || new Date;
  if (typeof date === 'string') {
    let [, year, month, day, hour, minute, second]: <string | number>[] = date
    .replace(/-/g, '/')
    // ? 处理UTC日期格式 yyyy-MM-dd'T'HH:mm:ss.SSSZ
    .replace(/T/g, ' ')
    .replace(/\.\d{3}Z/g, '')
    .match(/(\d{4})\/(\d{2})\/(\d{2})\s(\d{2}):(\d{2}):(\d{2})/);

    [year, month, day, hour, minute, second] = [year, month, day, hour, minute, second].map(i => Number(i));
    if (/^\d{4}\/\d{2}\/\d{2}T\d{2}:\d{2}:\d{2}/.test(date)) {
      day += 8;
    }
    date = new Date(date);
  }
  // 进行入参校验，若格式不正确则抛出错误
  if (date.toString() === 'Invalid Date') throw new Error('Incoming parameters Invalid Date');
  return date;
}

export {
  standardDate,
}