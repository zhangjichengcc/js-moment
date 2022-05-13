/*
 * @Author: zhangjicheng
 * @Date: 2022-05-13 18:31:15
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-13 18:50:09
 * @FilePath: \moments\src\utils.ts
 */

/**
 * 格式化日期，返回标准日期对象
 * @param string 
 * @returns Date
 */
 function standardDate(str?: string | Date): Date {
  let date = str || new Date;
  // ? 将 yyyy-mm-dd 转为 yyyy/mm/dd 处理ios new Date() 问题
  date = typeof date === 'string' ? new Date((date as string).replace(/-/g, '/')) : new Date(date);
  // todo 进行入参校验，若格式不正确则抛出错误
  if (date.toString() === 'Invalid Date') throw new Error('Incoming parameters Invalid Date');
  return date;
}

export {
  standardDate,
}